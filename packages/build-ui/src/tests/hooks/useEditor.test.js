import React from 'react';

import {screen, render, fireEvent, createEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {TreeTestComponent, ViewTestComponent} from './test-components';

import Builder from '../../components/Builder';
import DnDBuilder from '../../components/DnDBuilder';
import Workspace from '../../components/Workspace';
import ChildrenDrop from '../../components/ChildrenDrop';
import useEditor from '../../hooks/useEditor';
import useCollector from '../../hooks/collectors/useCollector';
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
    const rootSelector = selectors => (
        selectors.selectRoot()
    );
    const collected = useCollector({
        selector: rootSelector
    });
    const editor = useEditor({
        id: id,
    });
    const handleAppend = () => {
        const node = branch(
            item({
                type: 'Any',
                props: {'data-testid': 'appended'},
            })
        );
        editor.triggerCreate({
            node: node,
        });
    }
    const handleMoveToRoot = () => {
        const targetId = collected.node.id;
        editor.triggerMove({
            targetId: targetId,
        });
    }
    const handleSendFront = () => {
        editor.triggerShift({
            absolute: 0,
        });
    }
    const handleDelete = () => {
        editor.triggerDelete();
    }
    const handleReset = () => {
        editor.triggerRewrite({
            props: {text: 'Reset'}
        });
        editor.triggerListIndexAdd({
            name: 'reseted'
        });
    }
    const handleFix = () => {
        editor.triggerMetaUpdate({
            meta: {fixed: true},
        })
    }
    const handleOutline = event => {
        event.stopPropagation();
        editor.triggerIndexToggle({
            name: 'outlined'
        })
    }
    const handlePanelRemove = event => {
        event.stopPropagation();
        editor.triggerIndexRemove({
            name: 'panel'
        });
    }
    const handleSelect = () => {
        editor.triggerListIndexToggle({
            name: 'selected'
        });
    }
    const handleRollback = () => {
        editor.triggerListIndexRemove({
            name: 'reseted'
        });
    }
    const handleNumber = event => {
        const parser = Number.parseFloat;
        editor.handleUpdate(event, parser);
    }
    return <div>
        <div 
            onClick = {editor.handlePanel}
            onDoubleClick = {handleSelect}
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
        <button onClick = {handleAppend}>
            Append Child
        </button>
        <button onClick = {handleMoveToRoot}>
            Move to Root
        </button>
        <button onClick = {handleSendFront}>
            Send to Front
        </button>
        <button onClick = {handleDelete}>
            Delete
        </button>
        <button onClick = {handleReset}>
            Reset
        </button>
        <button onClick = {handleRollback}>
            Rollback
        </button>
        <button onClick = {handleFix}>
            Fix
        </button>
        <button onClick = {handlePanelRemove}>
            Remove panel
        </button>
        <button onClick = {handleOutline}>
            Outline
        </button>
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

        const view = {
            Any: ViewTestComponent,
            Editor: EditorHookUtilTestComponent
        };

        test('should trigger create to append child node', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button = screen.getByRole('button', {name: /append/i});
            fireEvent.click(button);
            expect(getTree().byIds[id_3].childIds.length).toBe(2);
            expect(screen.getByTestId(/appended/i)).toBeInTheDocument();
        });

        test('should trigger move for node in tree', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button = screen.getByRole('button', {name: /move to root/i});
            fireEvent.click(button);
            expect(getTree().byIds[id_3].parentId).toBe(id_1)
            expect(getTree().byIds[id_1].childIds).toContain(id_3);
        });

        test('should trigger shift for node in tree', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button = screen.getByRole('button', {name: /send to front/i});
            expect(getTree().byIds[id_1].childIds[0]).toBe(id_2);
            // Should shift after button click
            fireEvent.click(button);
            expect(getTree().byIds[id_1].childIds[0]).toBe(id_3);
            expect(getTree().byIds[id_1].childIds[1]).toBe(id_2);
        });

        test('should trigger delete for node and all of its children', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button = screen.getByRole('button', {name: /delete/i});
            fireEvent.click(button);
            // Both node and child should be 
            // deleted from tree.
            expect(getTree().byIds[id_3]).toBeUndefined();
            expect(getTree().byIds[id_4]).toBeUndefined();
        });

        test('should trigger rewrite for node props', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button = screen.getByRole('button', {name: /reset/i});
            fireEvent.click(button);
            expect(getTree().byIds[id_3].props).toEqual({text: 'Reset'});
        });

        test('should trigger meta update for node', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button = screen.getByRole('button', {name: /fix/i});
            fireEvent.click(button);
            expect(getTree().meta[id_3]).toHaveProperty('fixed', true);
        });

        test('should trigger index add and remove for node', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const editor = screen.getByTestId('editor');
            fireEvent.click(editor);
            expect(getTree().index.panel).toBe(id_3)
            const button = screen.getByRole('button', {name: /remove panel/i});
            fireEvent.click(button);
            expect(getTree().index.panel).toBeFalsy();
        });

        test('should trigger index toggle for node', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button = screen.getByRole('button', {name: /outline/i});
            fireEvent.click(button);
            expect(getTree().index.outlined).toBe(id_3)
            // Click again to toggle
            fireEvent.click(button);
            expect(getTree().index.outlined).not.toBe(id_3);
        });

        test('should trigger list index add and remove for node', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const button_reset = screen.getByRole('button', {name: /reset/i});
            fireEvent.click(button_reset);
            expect(getTree().index_list.reseted).toContain(id_3)
            // Click again to toggle
            const button_rollback = screen.getByRole('button', {name: /rollback/i});
            fireEvent.click(button_rollback);
            expect(getTree().index_list.reseted).not.toContain(id_3);
        });

        test('should trigger list index add and remove for node', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const editor = screen.getByTestId('editor');
            fireEvent.doubleClick(editor);
            expect(getTree().index_list.selected).toContain(id_3)
            // Click again to toggle
            fireEvent.doubleClick(editor);
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