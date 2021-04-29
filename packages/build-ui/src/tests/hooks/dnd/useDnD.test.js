// Test transfer type
// Test transfer meta when creating
// Test transfer meta when moving
// Test transfer data

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../../components/Builder';
import useDnD from '../../../hooks/dnd/useDnD';
import {getTransfer} from '../../../selectors';
import DnDListener from '../../../components/DnDListener';


const DnDListenerTestComponent = ({
    onTransfer = () => {}
}) => {
    const selector = store => (
        getTransfer(store)
    );
    const transfer = useSelector(
        selector
    );
    useEffect(() => {
        // Call function
        // to notify about
        // transfer.
        onTransfer(transfer);
    }, [
        transfer,
        onTransfer,
    ])
    return null;
}

const DnDHookTestComponent = () => {
    const dnd = useDnD({
        initialTransferType: 'test'
    });
    const handleDragCreate = () => {
        dnd.triggerDragStartCreate({
            data: {id: 1},
            meta: {position: 120},
        });
    }
    const handleDragMove = () => {
        dnd.triggerDragStartMove({
            data: {id: 1},
            meta: {position: 120},
        });
    }
    const handleDragEnd = () => {
        dnd.triggerDragEnd();
    }
    return <div>
        <DnDListener
            onDragStart = {handleDragCreate}
            onDragEnd = {handleDragEnd}
            listenTransferType = 'test'
        >
            Create
        </DnDListener>
        <DnDListener
            onDragStart = {handleDragMove}
            onDragEnd = {handleDragEnd}
            listenTransferType = 'test'
        >
            Move
        </DnDListener>
    </div>
}

describe('useDnD', () => {

    describe('DnD transfer data', () => {

        test('should set correct transfer data', () => {
            const onTransfer = jest.fn();
            render(<Builder>
                <DnDHookTestComponent />
                <DnDListenerTestComponent onTransfer = {onTransfer} />
            </Builder>);
            const getTransfer = () => {
                const calls = onTransfer.mock.calls.length;
                return onTransfer.mock.calls[calls - 1][0]
            }
            const drag = screen.getByText(/create/i);
            fireEvent.dragStart(drag);
            expect(getTransfer().data).toEqual({id: 1});
            // Fire drag end event to test
            // for data clean up.
            fireEvent.dragEnd(drag);
            expect(getTransfer().data).toBeNull();
        });

    });

    describe('DnD transfer type', () => {

        test('should set correct transfer type', () => {
            const onTransfer = jest.fn();
            render(<Builder>
                <DnDHookTestComponent />
                <DnDListenerTestComponent onTransfer = {onTransfer} />
            </Builder>);
            const getTransfer = () => {
                const calls = onTransfer.mock.calls.length;
                return onTransfer.mock.calls[calls - 1][0]
            }
            const drag = screen.getByText(/move/i);
            fireEvent.dragStart(drag);
            expect(getTransfer().type).toEqual('test');
            // Fire drag end event to test
            // for type clean up.
            fireEvent.dragEnd(drag);
            expect(getTransfer().type).toBeNull();
        });

    });

    describe('DnD transfer meta', () => {

        test('should set correct transfer meta for move events', () => {
            const onTransfer = jest.fn();
            render(<Builder>
                <DnDHookTestComponent />
                <DnDListenerTestComponent onTransfer = {onTransfer} />
            </Builder>);
            const getTransfer = () => {
                const calls = onTransfer.mock.calls.length;
                return onTransfer.mock.calls[calls - 1][0]
            }
            const drag = screen.getByText(/move/i);
            fireEvent.dragStart(drag);
            expect(getTransfer().meta).toEqual({
                create: false,
                position: 120,
            });
            // Fire drag end event to test
            // for meta clean up.
            fireEvent.dragEnd(drag);
            expect(getTransfer().meta).toBeNull();
        });

        test('should set correct transfer meta for create events', () => {
            const onTransfer = jest.fn();
            render(<Builder>
                <DnDHookTestComponent />
                <DnDListenerTestComponent onTransfer = {onTransfer} />
            </Builder>);
            const getTransfer = () => {
                const calls = onTransfer.mock.calls.length;
                return onTransfer.mock.calls[calls - 1][0]
            }
            const drag = screen.getByText(/create/i);
            fireEvent.dragStart(drag);
            expect(getTransfer().meta).toEqual({
                create: true,
                position: 120,
            });
            // Fire drag end event to test
            // for meta clean up.
            fireEvent.dragEnd(drag);
            expect(getTransfer().meta).toBeNull();
        });

    });

});

