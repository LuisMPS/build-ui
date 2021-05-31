import React, {useEffect} from 'react';

import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../components/Builder';
import Workspace from '../../components/Workspace';
import useEditor from '../../hooks/useEditor';
import useBuilder from '../../hooks/useBuilder';
import {branch, plainBranch, item, itemid} from '../../utils/tree';

const BuilderHookTestComponent = ({
    onTree = () => {},
    onHistory = () => {},
}) => {
    const builder = useBuilder();
    const tree = builder.json();
    const history = builder.history;
    useEffect(() => {
        onTree(tree);
        onHistory(history);
    }, [
        tree,
        history,
        onTree,
        onHistory,
    ]);
    const handleLoad = () => {
        const root = item({
            type: 'Any',
            props: {text: 'Replace'}
        });
        const anotherTree = branch(root);
        builder.loadTree(anotherTree);
    }
    return <div>
        <button onClick = {handleLoad}>
            Load
        </button>
        <button
            disabled = {!builder.canUndo}
            onClick = {builder.handleUndo} 
        >
            Undo
        </button>
        <button
            disabled = {!builder.canRedo}
            onClick = {builder.handleRedo}
        >
            Redo
        </button>
    </div>
}

const BuilderViewTestComponent = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id
    });
    return <div>
        <label htmlFor = 'text'>
            Text
        </label>
        <input 
            type = 'text'
            name = 'text'
            id = 'text'
            value = {props.text}
            onChange = {editor.handleUpdate}
        />
    </div>
}

beforeAll(() => {
    jest.useFakeTimers();
})

afterEach(() => {
    jest.runOnlyPendingTimers();
})

afterAll(() => {
    jest.useRealTimers();
})

describe('useBuilder', () => {

    const id_1 = itemid();

    const initialRoot = item({
        __id__: id_1,
        type: 'Any',
        props: {text: 'Hello'}
    });
    const initialTree = branch(initialRoot);

    const view = {
        Any: BuilderViewTestComponent,
    }

    describe('undo and redo logic', () => {

        test('should provide false canUndo when there are no changes in timeline', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent />
            </Builder>);      
            const undo = screen.getByRole('button', {name: /undo/i});
            expect(undo).toBeDisabled();
        });

        test('should provide false canRedo when there are no changes in timeline', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent />
            </Builder>);      
            const redo = screen.getByRole('button', {name: /redo/i});
            expect(redo).toBeDisabled();
        });

        test('should provide true canUndo when dispatching recorded action', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent />
            </Builder>);      
            const input = screen.getByLabelText(/text/i);
            fireEvent.change(input, {target: {value: 'Goodbye'}});
            const undo = screen.getByRole('button', {name: /undo/i});
            expect(undo).toBeEnabled();
        });

        test('should provide true canRedo when moving back in history', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent />
            </Builder>);      
            const input = screen.getByLabelText(/text/i);
            fireEvent.change(input, {target: {value: 'First'}});
            // Simulate batching first
            // input change to history before
            // running another action.
            jest.runOnlyPendingTimers();
            fireEvent.change(input, {target: {value: 'Second'}});
            const undo = screen.getByRole('button', {name: /undo/i});
            fireEvent.click(undo);
            const redo = screen.getByRole('button', {name: /redo/i});
            expect(redo).toBeEnabled();
        });

        test('should provide false canUndo when moving to 1st version in history', async () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent />
            </Builder>);      
            const input = screen.getByLabelText(/text/i);
            const undo = screen.getByRole('button', {name: /undo/i});
            // Simulate batch-splitting input 
            // change to history. Also, flush 
            // promise queue after each action 
            // to allow each batched changes to
            // be committed to history.
            for (let i = 0; i < 3; i++) {
                fireEvent.change(input, {target: {value: i}});
                jest.runAllTimers();
                await Promise.resolve();
            }
            // Fire undo three times as
            // they were committed in 3
            // different batches.
            fireEvent.click(undo);
            expect(undo).toBeEnabled();
            fireEvent.click(undo);
            expect(undo).toBeEnabled();
            fireEvent.click(undo);
            expect(undo).toBeDisabled();
        });

        test('should provide false canRedo when moving to last version in history', async () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent />
            </Builder>);      
            const input = screen.getByLabelText(/text/i);
            const undo = screen.getByRole('button', {name: /undo/i});
            const redo = screen.getByRole('button', {name: /redo/i});
            // Simulate batch-splitting input 
            // change to history. Also, flush 
            // promise queue after each action 
            // to allow each batched changes to
            // be committed to history.
            fireEvent.change(input, {target: {value: 'Goodbye'}});
            jest.runAllTimers();
            await Promise.resolve();
            // Fire undo three times as
            // they were committed in 3
            // different batches.
            fireEvent.click(undo);
            expect(redo).toBeEnabled();
            fireEvent.click(redo);
            expect(redo).toBeDisabled();
        });

    });

    describe('utility functions and types', () => {

        const onHistory = jest.fn();
        const getHistory = () => onHistory.mock.calls[onHistory.mock.calls.length - 1][0]
        const getTree = () => getHistory().present;

        afterEach(() => {
            onHistory.mockReset();
        });

        test('should provide json function to return current tree', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent onHistory = {onHistory} />
            </Builder>);      
            expect(getTree()).toEqual(plainBranch(initialTree));
        });
    
        test('should provide loadTree to set current tree', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent onHistory = {onHistory} />
            </Builder>);      
            expect(getTree().byIds[id_1]).toBeTruthy();
            expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
            const load = screen.getByRole('button', {name: /load/i});
            fireEvent.click(load);
            expect(getTree().byIds[id_1]).toBeFalsy();
            expect(screen.getByDisplayValue('Replace')).toBeInTheDocument();
        });
    
        test('should provide loadTree to restart history', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <BuilderHookTestComponent onHistory = {onHistory} />
            </Builder>);      
            const load = screen.getByRole('button', {name: /load/i});
            fireEvent.click(load);
            expect(getHistory().version).toBe(0);
            expect(getHistory().timeline.length).toBe(0);
        });

    });

});