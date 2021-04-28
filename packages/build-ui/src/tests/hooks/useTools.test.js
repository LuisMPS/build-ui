import React from 'react';

import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {TreeTestComponent, ViewTestComponent} from './test-components';

import Builder from '../../components/Builder';
import DnDBuilder from '../../components/DnDBuilder';
import Workspace from '../../components/Workspace';
import useEditor from '../../hooks/useEditor';
import useTools from '../../hooks/useTools';
import {branch, item, itemid} from '../../utils/tree';

const ToolsHookTestComponent = () => {
    const tools = useTools();
    const handleDragAccept = () => {
        const data = branch(
            item({
                type: 'Any',
                props: {'data-testid': 'tool-accepted'},
            })
        );
        tools.triggerDragStart({
            data: data,
        });
    }
    const handleDragReject = () => {
        const data = branch(
            item({
                type: 'Cancel',
                props: {'data-testid': 'tool-rejected'},
            })
        );
        tools.triggerDragStart({
            data: data,
        });
    }
    return <div>
        <DnDBuilder
            onDragStart = {handleDragAccept}
            onDragEnd = {tools.handleDragEnd}
        >
            Accept
        </DnDBuilder>
        <DnDBuilder
            onDragStart = {handleDragReject}
            onDragEnd = {tools.handleDragEnd}
        >
            Reject
        </DnDBuilder>
    </div>
}

const ToolsDropTestComponent = ({
    id,
    ...props
}) => {
    const initialOnDrop = ({
        transfer,
        cancel
    }) => {
        const type = transfer.type;
        if (type === 'Cancel') cancel();
    }
    const editor = useEditor({
        id: id,
        initialOnDrop: initialOnDrop,
    });
    return <DnDBuilder 
        onDrop = {editor.handleDrop}
        {...props}
    />
}

describe('useTools', () => {

    describe('DnD handlers and triggers', () => {

        const id_1 = itemid();
        
        const initialTree = branch(
            item({
                __id__: id_1,
                type: 'Tools',
                props: {'data-testid': 'drop_1'}
            })
        );

        const view = {
            Tools: ToolsDropTestComponent,
            Any: ViewTestComponent,
        };

        test('should provide dragStart and dragEnd support for typical DnD', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <ToolsHookTestComponent />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const tools = screen.getByText(/accept/i);
            const drop = screen.getByTestId('drop_1');
            fireEvent.dragStart(tools);
            fireEvent.drop(drop);
            fireEvent.dragEnd(tools);
            expect(getTree().byIds[id_1].childIds.length).toBe(1);
            expect(screen.getByTestId('tool-accepted')).toBeInTheDocument();
        });

        test('should be able to create with tool and cancel on drop', () => {
            const onTree = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <Workspace view = {view} />
                <ToolsHookTestComponent />
                <TreeTestComponent onTree = {onTree} />
            </Builder>);      
            const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
            const tools = screen.getByText(/reject/i);
            const drop = screen.getByTestId('drop_1');
            fireEvent.dragStart(tools);
            fireEvent.drop(drop);
            fireEvent.dragEnd(tools);
            expect(getTree().byIds[id_1].childIds.length).toBe(0);
            expect(screen.queryByTestId('tool-rejected')).toBeNull();
        });

    });

})