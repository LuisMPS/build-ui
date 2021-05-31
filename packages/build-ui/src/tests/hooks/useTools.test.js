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
        const root = item({
            type: 'Any',
            props: {'data-testid': 'tool-accepted'},
        });
        const data = branch(root);
        tools.triggerDragStart({
            data: data,
        });
    }
    const handleDragReject = () => {
        const root = item({
            type: 'Cancel',
            props: {'data-testid': 'tool-rejected'},
        });
        const data = branch(root);
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
    const onDrop = ({
        transfer,
        cancel
    }) => {
        const type = transfer.type;
        if (type === 'Cancel') cancel();
    }
    const editor = useEditor({
        id: id,
        onDrop: onDrop,
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

        const onTree = jest.fn();
        const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]

        afterEach(() => {
            onTree.mockReset();
        });

        test('should be true', () => {
            expect(true).toBeTruthy();
        });

    });

})