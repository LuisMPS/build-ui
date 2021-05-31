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

describe('useToolDnD', () => {

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

        test('should be true', () => {
            expect(true).toBeTruthy();
        })

    });

});