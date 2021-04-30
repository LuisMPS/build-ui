import React from 'react';

import {screen, render, fireEvent, createEvent} from '@testing-library/react';
import {renderHook, act} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import {TreeTestComponent, ViewTestComponent} from './test-components';

import Builder from '../../components/Builder';
import DnDBuilder from '../../components/DnDBuilder';
import Workspace from '../../components/Workspace';
import ChildrenDrop from '../../components/ChildrenDrop';
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
    const initialOnDrop = ({
        transfer,
        cancel,
    }) => {
        const type = transfer.type;
        if (type === 'CancelTest') cancel();
    }
    const editor = useEditor({
        id: id,
        initialOnDrop: initialOnDrop,
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
    >
        <ChildrenDrop 
            {...props} 
            onDrop = {handleChildDrop}
            data-testid = {drop_testid}
        >
            {children}
        </ChildrenDrop>
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
});

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

        test('should provide handleDrag* and handleDrop supporting typical DnD', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const builder_1 = screen.getByTestId('builder_1');
            const builder_3 = screen.getByTestId('builder_3');
            fireEvent.dragStart(builder_1);
            fireEvent.drop(builder_3);
            fireEvent.dragEnd(builder_1);
            expect(getTree().byIds[id_1].parentId).toBe(id_3);
            expect(getTree().byIds[id_3].childIds).toContain(id_1);
        });

        test('should provide handleDrop supporting recursive DnD', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const builder_1 = screen.getByTestId('builder_1');
            const builder_2 = screen.getByTestId('builder_2');
            fireEvent.dragStart(builder_1);
            fireEvent.drop(builder_2);
            fireEvent.dragEnd(builder_1);
            expect(getTree().byIds[id_1].parentId).not.toBe(id_2);
            expect(getTree().byIds[id_2].childIds).not.toContain(id_1);
        });

        test('should provide handleChildXDrop for positioned X drops', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const builder_drop = screen.getByTestId('drop_1');
            const builder_3 = screen.getByTestId('builder_3');
            const {top, left, width, height} = builder_drop.getBoundingClientRect();
            fireEvent.dragStart(builder_3);
            const dropEvent = createEvent.drop(builder_drop);
            // Mutate event directly since
            // jsdom (react testing library?)
            // does not support setting event
            // position in options, as it does
            // for other events.
            dropEvent.clientX = left + width / 4;
            dropEvent.clientY = top + height / 4;
            fireEvent(builder_drop, dropEvent);
            fireEvent.dragEnd(builder_3);
            expect(getTree().byIds[id_3].parentId).toBe(id_1);
            // Should have inserted at first 
            // position (i.e. before child
            // because simulated drop was on
            // leftmost position of child).
            expect(getTree().byIds[id_1].childIds[0]).toBe(id_3);
        });

        test('should provide handleChildYDrop for positioned Y drops', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const builder_drop = screen.getByTestId('drop_2');
            const builder_1 = screen.getByTestId('builder_1');
            const {top, left, width, height} = builder_drop.getBoundingClientRect();
            fireEvent.dragStart(builder_1);
            const dropEvent = createEvent.drop(builder_drop);
            // Mutate event directly since
            // jsdom (react testing library?)
            // does not support setting event
            // position in options, as it does
            // for other events.
            dropEvent.clientX = left + 3 * width / 4;
            dropEvent.clientY = top + 3 * height / 4;
            fireEvent(builder_drop, dropEvent);
            fireEvent.dragEnd(builder_1);
            expect(getTree().byIds[id_1].parentId).toBe(id_3);
            // Should have inserted at second 
            // position (i.e. after child
            // because simulated drop was on lower
            // position of child).
            expect(getTree().byIds[id_3].childIds[1]).toBe(id_1);
        });

        test('should accept onDrop function to cancel drops', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const builder = screen.getByTestId('builder_1');
            const builder_cancel = screen.getByTestId('builder_cancel');
            fireEvent.dragStart(builder_cancel);
            fireEvent.drop(builder);
            fireEvent.dragEnd(builder_cancel);
            expect(getTree().byIds[id_cancel].parentId).not.toBe(id_1);
            expect(getTree().byIds[id_1].childIds).not.toContain(id_cancel);
        });

    });

    describe('action triggers', () => {

        const id_1 = itemid();
        const id_2 = itemid();
        const id_3 = itemid();
        const id_4 = itemid();
        const initialTree = branch(
            item({
                __id__: id_1,
                type: 'Any',
            })
        )
        .with_child(
            item({
                __id__: id_2,
                type: 'Any',
            })
        )
        .with_child(
            branch(
                item({
                    __id__: id_3,
                    type: 'Editor',
                    props: {text: 'Text', 'data-testid': 'editor'}
                })
            ).with_child(
                item({
                    __id__: id_4,
                    type: 'Any',
                })
            )
        );

        const wrapper = ({children, onTree}) => (
            <Builder initialTree = {initialTree}>
                <TreeTestComponent onTree = {onTree} />
                {children}
            </Builder>
        );

        test('should trigger create to append child node', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});  
            const editor = hook.result.current;   
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const id_append = itemid();
            const root = item({__id__: id_append, type: 'Any'});
            const node = branch(root);
            act(() => editor.triggerCreate({node: node}));
            expect(getTree().byIds[id_3].childIds.length).toBe(2);
            expect(getTree().byIds[id_append]).toBeDefined();
        });

        test('should trigger move for node in tree', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});
            const editor = hook.result.current;        
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerMove({targetId: id_1}));
            expect(getTree().byIds[id_3].parentId).toBe(id_1)
            expect(getTree().byIds[id_1].childIds).toContain(id_3);
        });

        test('should trigger shift for node in tree', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});
            const editor = hook.result.current;     
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerShift({absolute: 0}));
            expect(getTree().byIds[id_1].childIds[0]).toBe(id_3);
            expect(getTree().byIds[id_1].childIds[1]).toBe(id_2);
        });

        test('should trigger delete for node and all of its children', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});  
            const editor = hook.result.current;      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerDelete());
            // Both node and child should be 
            // deleted from tree
            expect(getTree().byIds[id_3]).toBeUndefined();
            expect(getTree().byIds[id_4]).toBeUndefined();
        });

        test('should trigger rewrite for node props', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});    
            const editor = hook.result.current;    
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerRewrite({props: {text: 'Reset'}}));
            expect(getTree().byIds[id_3].props).toEqual({text: 'Reset'});
        });

        test('should trigger meta update for node', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});
            const editor = hook.result.current;        
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerMetaUpdate({meta: {fixed: true}}));
            expect(getTree().meta[id_3]).toHaveProperty('fixed', true);
        });

        test('should trigger index add and remove for node', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});   
            const editor = hook.result.current;     
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerIndexAdd({name: 'panel'}));
            expect(getTree().index.panel).toBe(id_3);
            act(() => editor.triggerIndexRemove({name: 'panel'}));
            expect(getTree().index.panel).toBeFalsy();
        });

        test('should trigger index toggle for node', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});
            const editor = hook.result.current;        
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerIndexToggle({name: 'outlined'}));
            expect(getTree().index.outlined).toBe(id_3)
            // Click again to toggle
            act(() => editor.triggerIndexToggle({name: 'outlined'}));
            expect(getTree().index.outlined).not.toBe(id_3);
        });

        test('should trigger list index add and remove for node', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});
            const editor = hook.result.current;        
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerListIndexAdd({name: 'reseted'}));
            expect(getTree().index_list.reseted).toContain(id_3)
            // Click again to toggle
            act(() => editor.triggerListIndexRemove({name: 'reseted'}));
            expect(getTree().index_list.reseted).not.toContain(id_3);
        });

        test('should trigger list index add and remove for node', () => {
            const onTree = jest.fn();
            const initialProps = {onTree: onTree};
            const hook = renderHook(() => useEditor({
                id: id_3
            }), {wrapper: wrapper, initialProps: initialProps});  
            const editor = hook.result.current;      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            act(() => editor.triggerListIndexToggle({name: 'selected'}));
            expect(getTree().index_list.selected).toContain(id_3)
            // Click again to toggle
            act(() => editor.triggerListIndexToggle({name: 'selected'}));
            expect(getTree().index_list.selected).not.toContain(id_3);
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

        test('should provide working update handler for inputs', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const input = screen.getByLabelText(/text/i);
            fireEvent.change(input, {target: {value: 'Goodbye'}});
            expect(getTree().byIds[id_1].props.text).toEqual('Goodbye');
        });

        test('should provide working update handler for inputs with parser', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const input = screen.getByLabelText(/number/i);
            fireEvent.change(input, {target: {value: '75.1'}});
            expect(getTree().byIds[id_1].props.number).toEqual(75.1);
        });

        test('should provide working panel handler', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const editor = screen.getByTestId('editor');
            fireEvent.click(editor);
            expect(getTree().index.panel).toEqual(id_1);
        });

    });

});