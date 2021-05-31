import React from 'react';

import {screen, render, fireEvent, createEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {TreeTestComponent, ViewTestComponent} from './test-components';

import Builder from '../../components/Builder';
import DnDBuilder from '../../components/DnDBuilder';
import Workspace from '../../components/Workspace';
import useEditor from '../../hooks/useEditor';
import {branch, item, itemid} from '../../utils/tree';

const EditorHookDnDTestComponent = ({
    id,
    builder_testid,
    drop_testid,
    horizontal,
    children = [],
    ...props
}) => {
    const onDrop = ({
        transfer,
        cancel,
    }) => {
        const type = transfer.type;
        if (type === 'CancelTest') cancel();
    }
    const editor = useEditor({
        id: id,
        onDrop: onDrop,
    });
    const handleChildDrop = (
        horizontal 
        ? editor.handleChildXDrop 
        : editor.handleChildYDrop
    );
    return <DnDBuilder
        onDragStart = {editor.handleDragStart}
        onDragEnd = {editor.handleDragEnd}
        onDrop = {editor.handleDrop}
        data-testid = {builder_testid}
        {...props}
    >
        {children}
      </DnDBuilder>
}

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

    describe('DnD handlers', () => {

        // Necessary to test childXDrop and
        // childYDrop since they are position
        // dependent and jsdom does not
        // support layout calculations.
        beforeAll(() => {
            jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
            HTMLElement.prototype.getBoundingClientRect.mockImplementation(() => ({
                top: 100,
                left: 100,
                x: 100,
                y: 100,
                width: 500,
                height: 200,
            }));
        })

        // Restore mock implementation
        // for further tests.
        afterAll(() => {
            HTMLElement.prototype.getBoundingClientRect.mockRestore();
        });

        // Initialize tree with some data
        // for DnD handlers tests.
        // Generate some id's
        // and force them in tree
        const id_1 = itemid();
        const id_2 = itemid();
        const id_3 = itemid();
        const id_4 = itemid();
        const id_cancel = itemid();
        const initialTree = branch(
            item({
                type: 'Any'
            })
        ).with_child(
            branch(
                item({
                    __id__: id_1,
                    type: 'Editor',
                    props: {
                        builder_testid: 'builder_1', 
                        drop_testid: 'drop_1', 
                        horizontal: true
                    }
                })
            )
            .with_child(
                item({
                    __id__: id_2,
                    type: 'Editor',
                    props: {builder_testid: 'builder_2'}
                })
            )
        ).with_child(
            branch(
                item({
                    __id__: id_3,
                    type: 'Editor',
                    props: {
                        builder_testid: 'builder_3', 
                        drop_testid: 'drop_2', 
                        horizontal: false
                    }
                })
            )
            .with_child(
                item({
                    __id__: id_4,
                    type: 'Editor',
                    props: {builder_testid: 'builder_4'}
                })
            )
        )
        .with_child(
            item({
                __id__: id_cancel,
                type: 'CancelTest',
                props: {builder_testid: 'builder_cancel'}
            })
        );

        const view = {
            Any: ViewTestComponent, 
            CancelTest: EditorHookDnDTestComponent, 
            Editor: EditorHookDnDTestComponent
        };

        const onTree = jest.fn();
        const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]

        afterEach(() => {
            onTree.mockReset();
        });

    });

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