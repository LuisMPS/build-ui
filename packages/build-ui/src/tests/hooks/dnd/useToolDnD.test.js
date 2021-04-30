import React from 'react';

import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../../components/Builder';
import DnDListener from '../../../components/DnDListener';
import useToolDnD from '../../../hooks/dnd/useToolDnD';
import {branch, item, itemid} from '../../../utils/tree';

const ToolDnDHookTestComponent = ({
    id,
}) => {
    const dnd = useToolDnD({
        id: id,
        initialTransferType: 'test' 
    });
    const handleDragStart = event => {
        event.stopPropagation();
        dnd.triggerDragStart({
            data: true,
        });
    }
    return <DnDListener
        listenTransferType = 'test'
        onDragStart = {handleDragStart}
        onDragEnd = {dnd.handleDragEnd}
    >
        Tool
    </DnDListener>
}

describe('useNodeDnD', () => {

    const id = itemid();
    const initialTree = branch(
        item({
            __id__: id,
            type: 'TypeA',
        })
    );

    const view = {
        TypeA: ToolDnDHookTestComponent
    }

    describe('node DnD transfer type', () => {

        test('should use transfer type to handle events when type matches', () => {
            const handleDrop = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <ToolDnDHookTestComponent />
                <DnDListener
                    listenTransferType = 'test'
                    onDrop = {handleDrop}
                >
                    Listener
                </DnDListener>
            </Builder>);
            const tool = screen.getByText(/tool/i);
            const listener = screen.getByText(/listener/i);
            fireEvent.dragStart(tool);
            fireEvent.drop(listener);
            fireEvent.dragEnd(tool);
            // Should have called onDrop
            // in listener component once
            expect(handleDrop).toHaveBeenCalledTimes(1);
        });

        test('should use transfer type to ignore events when type does not match', () => {
            const handleDrop = jest.fn();
            render(<Builder initialTree = {initialTree}>
                <ToolDnDHookTestComponent />
                <DnDListener
                    listenTransferType = 'other'
                    onDrop = {handleDrop}
                >
                    Listener
                </DnDListener>
            </Builder>);
            const tool = screen.getByText(/tool/i);
            const listener = screen.getByText(/listener/i);
            fireEvent.dragStart(tool);
            fireEvent.drop(listener);
            fireEvent.dragEnd(tool);
            // Should have never called onDrop
            // in listener component
            expect(handleDrop).toHaveBeenCalledTimes(0);
        });

    });

});