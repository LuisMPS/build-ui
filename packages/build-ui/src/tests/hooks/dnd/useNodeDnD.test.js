import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {createEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import Builder from '../../../components/Builder';
import DnDListener from '../../../components/DnDListener';
import useNodeDnD from '../../../hooks/dnd/useNodeDnD';
import {branch, item, itemid} from '../../../utils/tree';
import {updateTransfer} from '../../../slices/transfer';

const NodeDnDHookTestComponent = ({
    id,
}) => {
    const dnd = useNodeDnD({
        id: id,
        transferType: 'test' 
    });
    return <DnDListener
        listenTransferType = 'test'
        onDragStart = {dnd.handleDragStart}
        onDragEnd = {dnd.handleDragEnd}
    >
        Node
    </DnDListener>
}

const DnDListenerTestComponent = ({
    transfering = false,
    transferType,
}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!transfering) return;
        dispatch(updateTransfer({
            data: true,
            meta: true,
            type: transferType,
        }));
    });
    return null;
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
        TypeA: NodeDnDHookTestComponent
    }

    describe('node DnD transfer type', () => {

    });

    describe('node DnD transfer data', () => {

        const wrapper = ({children, transfering, transferType}) => (
            <Builder initialTree = {initialTree}>
                <DnDListenerTestComponent 
                    transferType = {transferType}
                    transfering = {transfering}
                />
                {children}
            </Builder>
        );

        test('should get false from isTransfering when there is no transfer', () => {
            const initialProps = {
                transfering: false, 
                transferType: 'test'
            }
            const options = {
                wrapper: wrapper, 
                initialProps: initialProps
            }
            const hook = renderHook(() => useNodeDnD({
                id: id,
                transferType: 'test'
            }), options);
            const dnd = hook.result.current;
            expect(dnd.isTransfering).toBe(false);
        });

        test('should get true from isTransfering when there is ongoing transfer', () => {
            const initialProps = {
                transfering: true, 
                transferType: 'test'
            }
            const options = {
                wrapper: wrapper, 
                initialProps: initialProps
            }
            const hook = renderHook(() => useNodeDnD({
                id: id,
                transferType: 'test',
            }), options);
            const dnd = hook.result.current;
            expect(dnd.isTransfering).toBe(true);
        });

        test('should get false from isTransferingType when type does not match', () => {
            const initialProps = {
                transfering: true, 
                transferType: 'other'
            }
            const options = {
                wrapper: wrapper, 
                initialProps: initialProps
            }
            const hook = renderHook(() => useNodeDnD({
                id: id,
                transferType: 'test'
            }), options);
            const dnd = hook.result.current;
            expect(dnd.isTransferingType).toBe(false);
        });

        test('should get true from isTransferingType when type matches', () => {
            const initialProps = {
                transfering: true, 
                transferType: 'test'
            }
            const options = {
                wrapper: wrapper, 
                initialProps: initialProps
            }
            const hook = renderHook(() => useNodeDnD({
                id: id,
                transferType: 'test'
            }), options);
            const dnd = hook.result.current;
            expect(dnd.isTransferingType).toBe(true);
        });

    });

});