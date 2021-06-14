import React from 'react';

import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {TreeTestComponent} from './test-components';

import Builder from '../../components/Builder';
import Workspace from '../../components/Workspace';
import useEditor from '../../hooks/useEditor';
import {branch, item, itemid} from '../../utils/tree';

const EditorHookUtilTestComponent = ({
    id,
    text,
    number,
    ...props
}) => {
    const editor = useEditor({
        id: id,
    });
    const handleNumber = event => {
        const parser = Number.parseFloat;
        editor.handleUpdate(event, parser);
    }
    return <div>
        <div 
            onClick = {editor.handlePanel}
            {...props}
        />
        <label htmlFor = 'text'>Text</label>
        <input 
            type = 'text'
            name = 'text'
            id = 'text'
            value = {text}
            onChange = {editor.handleUpdate}
        />
        <label htmlFor = 'number'>Number</label>
        <input 
            type = 'text'
            name = 'number'
            id = 'number'
            value = {number}
            onChange = {handleNumber}
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


describe('useEditor', () => {

    describe('utility handlers', () => {

        // Scoped to utility handlers inside 
        // editor hook, such as handleUpdate 
        // and handlePanel.

        const id_1 = itemid();
        const initialTree = branch(
            item({
                __id__: id_1,
                type: 'Editor',
                props: {text: 'Hello', number: 9, 'data-testid': 'editor'}
            })
        );

        const view = {
            Editor: EditorHookUtilTestComponent
        };

        const onTree = jest.fn();
        const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]

        afterEach(() => {
            onTree.mockReset();
        });

        test('should provide working update handler for inputs', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const input = screen.getByLabelText(/text/i);
            fireEvent.change(input, {target: {value: 'Goodbye'}});
            expect(getTree().byIds[id_1].props.text).toEqual('Goodbye');
        });

        test('should provide working update handler for inputs with parser', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const input = screen.getByLabelText(/number/i);
            fireEvent.change(input, {target: {value: '75.1'}});
            expect(getTree().byIds[id_1].props.number).toEqual(75.1);
        });

        test('should provide working panel handler', () => {
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const editor = screen.getByTestId('editor');
            fireEvent.click(editor);
            expect(getTree().index.panel).toEqual(id_1);
        });

    });

});