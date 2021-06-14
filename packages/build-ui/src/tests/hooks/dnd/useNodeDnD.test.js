import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {createEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import Builder from '../../../components/Builder';
import DnDListener from '../../../components/DnDListener';
import useNodeDnD from '../../../hooks/dnd/useNodeDnD';
import {branch, item, itemid} from '../../../utils/tree';
import {startTransfer} from '../../../slices/transfer';

const NodeDnDHookTestComponent = ({
    id,
}) => {
    const dnd = useNodeDnD({
        id: id,
        initialTransferType: 'test' 
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
        dispatch(startTransfer({
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
                initialTransferType: 'test'
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
                initialTransferType: 'test',
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
                initialTransferType: 'test'
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
                initialTransferType: 'test'
            }), options);
            const dnd = hook.result.current;
            expect(dnd.isTransferingType).toBe(true);
        });

    });

    describe('node DnD util functions', () => {

        const wrapper = ({children}) => (
            <Builder initialTree = {initialTree}>
                {children}
            </Builder>
        );

        const mockClientRect = {
            top: 100,
            left: 100,
            x: 100,
            y: 100,
            width: 500,
            height: 200,
        };

        const mockElement = document.createElement(
            'div'
        );

        // Necessary to test event position
        // since it is position dependent 
        // and jsdom does not support 
        // layout calculations.
        beforeAll(() => {
            jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
            HTMLElement.prototype.getBoundingClientRect.mockImplementation(() => (
                mockClientRect
            ));
        })

        // Restore mock implementation
        // for further tests.
        afterAll(() => {
            HTMLElement.prototype.getBoundingClientRect.mockRestore();
        });


        test('should return position from getEventPosition for HTML5 API', () => {
            const hook = renderHook(() => useNodeDnD({
                id: id,
                initialTransferType: 'test'
            }), {wrapper: wrapper});
            const dnd = hook.result.current;
            const dropEvent = createEvent('drop', mockElement);
            // Mutate event directly since
            // jsdom (react testing library?)
            // does not support setting event
            // position in options, as it does
            // for other events.
            dropEvent.clientX = mockClientRect.left + mockClientRect.width / 4;
            dropEvent.clientY = mockClientRect.top + mockClientRect.height / 4;
            // Mutate event directly
            // to set currentTarget
            // property to mock HTML
            // element since it is not
            // bound by jsdom automatically.
            Object.defineProperty(dropEvent, 'currentTarget', {value: mockElement});
            // Matcher definition
            expect(dnd.getDnDEventPosition(dropEvent)).toEqual({
                top: true,
                bottom: false,
                left: true,
                right: false,
            });
        });

        test('should return position from getEventPosition for Touch API', () => {
            const hook = renderHook(() => useNodeDnD({
                id: id,
                initialTransferType: 'test'
            }), {wrapper: wrapper});
            const dnd = hook.result.current;
            const dropEvent = createEvent.touchEnd(document, {
                changedTouches: [{
                    clientX: mockClientRect.left + 3 * mockClientRect.width / 4,
                    clientY: mockClientRect.top + mockClientRect.height / 4,
                }]
            });
            // Mutate event directly
            // to set currentTarget
            // property to mock HTML
            // element since it is not
            // bound by jsdom automatically.
            Object.defineProperty(dropEvent, 'currentTarget', {value: mockElement});
            // Matcher definition
            expect(dnd.getDnDEventPosition(dropEvent)).toEqual({
                top: true,
                bottom: false,
                left: false,
                right: true,
            });
        });

    });

});