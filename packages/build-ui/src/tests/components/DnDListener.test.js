import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../Builder';
import DnDListener from '../DnDListener';
import {startTransfer} from '../../slices/transfer';

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

describe('<DnDListener />', () => {

    test('should pass non-dnd props down to root element', () => {
        const handleClick = jest.fn();
        render(<Builder>
            <DnDListener 
                onClick = {handleClick}
                data-testid = 'listener'
            >
                <p>Child Prop</p>
            </DnDListener>
        </Builder>);
        const listener = screen.getByTestId('listener');
        fireEvent.click(listener);
        expect(listener).toBeInTheDocument();
        expect(screen.getByText(/child/i)).toBeInTheDocument();
        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    describe('should respond to mouse events and HTML5 DnD API', () => {
        
        test('should always respond to passive dnd events', () => {
            const handleDragStart = jest.fn();
            const handleDragEnd = jest.fn();
            render(<Builder>
                <DnDListener 
                    onDragStart = {handleDragStart}
                    onDragEnd = {handleDragEnd}
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.dragStart(listener);
            expect(handleDragStart).toHaveBeenCalledTimes(1);
            fireEvent.dragEnd(listener);
            expect(handleDragEnd).toHaveBeenCalledTimes(1);
        });

        test('should not respond to drag end if there was no previous drag start', () => {
            const handleDragEnd = jest.fn();
            render(<Builder>
                <DnDListener 
                    onDragEnd = {handleDragEnd}
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.dragEnd(listener);
            expect(handleDragEnd).toHaveBeenCalledTimes(0);
        });
    
        test('should not respond to active dnd events if there is no transfer data', () => {
            const handleDragEnter = jest.fn();
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListener 
                    onDragEnter = {handleDragEnter}
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.dragEnter(listener);
            expect(handleDragEnter).toHaveBeenCalledTimes(0);
            fireEvent.dragOver(listener);
            expect(handleDragOver).toHaveBeenCalledTimes(0);
            fireEvent.drop(listener);
            expect(handleDrop).toHaveBeenCalledTimes(0);
        });
    
        test('should not respond to active dnd events if transfer type is different', () => {
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListenerTestComponent 
                    transfering = {true}
                    transferType = 'type_1'
                />
                <DnDListener 
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    listenTransferType = 'type_2'
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.dragOver(listener);
            expect(handleDragOver).toHaveBeenCalledTimes(0);
            fireEvent.drop(listener);
            expect(handleDrop).toHaveBeenCalledTimes(0);
        });
    
        test('should respond to active dnd events if transfer type is same', () => {
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListenerTestComponent 
                    transfering = {true}
                    transferType = 'type_1'
                />
                <DnDListener 
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    listenTransferType = 'type_1'
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.dragOver(listener);
            expect(handleDragOver).toHaveBeenCalledTimes(1);
            fireEvent.drop(listener);
            expect(handleDrop).toHaveBeenCalledTimes(1);
        });
    
        test('should respond to active dnd events if listening to any type', () => {
            const handleDragEnter = jest.fn();
            const handleDragLeave = jest.fn();
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListenerTestComponent 
                    transfering = {true}
                    transferType = 'type_1'
                />
                <DnDListener 
                    onDragEnter = {handleDragEnter}
                    onDragLeave = {handleDragLeave}
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    listenAny = {true}
                    data-testid = 'listener' 
                />
            </Builder>);
            // Simulate a DnD operations
            // close to what it would be 
            // really like in browser.
            const listener = screen.getByTestId('listener');
            fireEvent.dragEnter(listener);
            expect(handleDragEnter).toHaveBeenCalledTimes(1);
            fireEvent.dragOver(listener);
            expect(handleDragOver).toHaveBeenCalledTimes(1);
            fireEvent.dragLeave(listener);
            expect(handleDragLeave).toHaveBeenCalledTimes(1);
            fireEvent.dragEnter(listener);
            fireEvent.drop(listener);
            expect(handleDrop).toHaveBeenCalledTimes(1);
        });

    })

    describe('should respond to touch events and Touch DnD API', () => {

        // To test touch drag start and
        // dragTouchTimeThreshold prop
        // in DnD touch implementation.
        beforeAll(() => {
            jest.useFakeTimers();
        });

        // Clear any possible running
        // timers and discard mock for 
        // further tests. 
        afterEach(() => {
            jest.runOnlyPendingTimers();
        });

        afterAll(() => {
            jest.useRealTimers();
        });

        // Necessary to test touch move and 
        // touch end events on touch screens 
        // since DnD events are fired according
        // to positioning and jsdom does not
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

        test('should always respond to passive events with timeout', () => {
            const handleDragStart = jest.fn();
            const handleDragEnd = jest.fn();
            render(<Builder>
                <DnDListener 
                    onDragStart = {handleDragStart}
                    onDragEnd = {handleDragEnd}
                    dragTouchTimeThreshold = {2000}
                    data-testid = 'listener'
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.touchStart(listener);
            expect(handleDragStart).toHaveBeenCalledTimes(0);
            jest.advanceTimersByTime(1000);
            // Should not run drag start just yet
            expect(handleDragStart).toHaveBeenCalledTimes(0);
            jest.advanceTimersByTime(1000);
            // Should run drag start by now
            expect(handleDragStart).toHaveBeenCalledTimes(1);
            fireEvent.touchEnd(listener);
            // Necessary since dragEnd should
            // happen async.
            jest.advanceTimersByTime(0);
            expect(handleDragEnd).toHaveBeenCalledTimes(1);
        });

        test('should not respond to drag start twice in some mobile browsers', () => {
            const handleDragStart = jest.fn();
            render(<Builder>
                <DnDListener 
                    onDragStart = {handleDragStart}
                    dragTouchTimeThreshold = {2000}
                    data-testid = 'listener'
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.touchStart(listener);
            expect(handleDragStart).toHaveBeenCalledTimes(0);
            jest.advanceTimersByTime(1000);
            fireEvent.dragStart(listener);
            // Should have not triggered drag start
            // cause there is an active touch on 
            // screen.
            expect(handleDragStart).toHaveBeenCalledTimes(0);
            jest.advanceTimersByTime(1000);
            // Should run drag start by now
            expect(handleDragStart).toHaveBeenCalledTimes(1);
        });

        test('should not respond to drag end if there was no previous drag start', () => {
            const handleDragEnd = jest.fn();
            render(<Builder>
                <DnDListener 
                    onDragEnd = {handleDragEnd}
                    dragTouchTimeThreshold = {2000}
                    data-testid = 'listener'
                />
            </Builder>);
            const listener = screen.getByTestId('listener');
            fireEvent.touchStart(listener);
            jest.advanceTimersByTime(1500);
            // Should not have run drag start
            fireEvent.touchEnd(listener);
            // Timer should have been cancelled now.
            // No drag end should have taken place
            // and will not take place for this touch start
            // because time threshold did not complete.
            expect(handleDragEnd).toHaveBeenCalledTimes(0);
        });

        test('should not respond to active dnd events if there is no transfer data', () => {
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListener 
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener'); 
            const {top, left, width, height} = listener.getBoundingClientRect();
            // Fire events mobile (Simulate DnD active
            // events on touch screen).
            // "Drag over" event at center of listener
            fireEvent.touchMove(document, {
                touches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            // "Drop" event at center of listener
            fireEvent.touchEnd(document, {
                changedTouches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            expect(handleDragOver).toHaveBeenCalledTimes(0);
            expect(handleDrop).toHaveBeenCalledTimes(0);
        });
    
        test('should not respond to active dnd events if transfer type is different', () => {
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListenerTestComponent 
                    transfering = {true}
                    transferType = 'type_1'
                />
                <DnDListener 
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    listenTransferType = 'type_2'
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener'); 
            const {top, left, width, height} = listener.getBoundingClientRect();
            // Fire events mobile (Simulate DnD active
            // events on touch screen).
            // "Drag over" event at center of listener
            fireEvent.touchMove(document, {
                touches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            // "Drop" event at center of listener
            fireEvent.touchEnd(document, {
                changedTouches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            expect(handleDragOver).toHaveBeenCalledTimes(0);
            expect(handleDrop).toHaveBeenCalledTimes(0);
        });
    
        test('should respond to active dnd events if transfer type is same', () => {
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListenerTestComponent 
                    transfering = {true}
                    transferType = 'type_1'
                />
                <DnDListener 
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    listenTransferType = 'type_1'
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener'); 
            const {top, left, width, height} = listener.getBoundingClientRect();
            // Fire events mobile (Simulate DnD active
            // events on touch screen).
            // "Drag over" event at center of listener
            fireEvent.touchMove(document, {
                touches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            // "Drop" event at center of listener
            fireEvent.touchEnd(document, {
                changedTouches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            expect(handleDragOver).toHaveBeenCalledTimes(1);
            expect(handleDrop).toHaveBeenCalledTimes(1);

        });
    
        test('should respond to active dnd events if listening to any type', () => {
            const handleDragEnter = jest.fn();
            const handleDragLeave = jest.fn();
            const handleDragOver = jest.fn();
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListenerTestComponent 
                    transfering = {true}
                    transferType = 'type_1'
                />
                <DnDListener 
                    onDragEnter = {handleDragEnter}
                    onDragLeave = {handleDragLeave}
                    onDragOver = {handleDragOver}
                    onDrop = {handleDrop}
                    listenAny = {true}
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener'); 
            const {top, left, width, height} = listener.getBoundingClientRect();
            // Fire events mobile (Simulate DnD active
            // events on touch screen).
            // "Drag over" event at center of listener
            fireEvent.touchMove(document, {
                touches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            expect(handleDragOver).toHaveBeenCalledTimes(1);
            expect(handleDragEnter).toHaveBeenCalledTimes(1);
            // "Drag over" event outside of listener
            fireEvent.touchMove(document, {
                touches: [{
                    clientX: left - 1,
                    clientY: top - 1,
                }]
            });
            expect(handleDragLeave).toHaveBeenCalledTimes(1);
            // "Drag enter" again to center of listener
            fireEvent.touchMove(document, {
                touches: [{
                    clientX: left + width / 2,
                    clientY: left + width / 2,
                }]
            });
            // "Drop" event at center of listener
            fireEvent.touchEnd(document, {
                changedTouches: [{
                    clientX: left + width / 2,
                    clientY: top + height / 2,
                }]
            });
            expect(handleDrop).toHaveBeenCalledTimes(1);            
        });

        test('should not handle drop if it occurs outside bounds of element', () => {
            const handleDrop = jest.fn();
            render(<Builder>
                <DnDListenerTestComponent 
                    transfering = {true}
                    transferType = 'type_1'
                />
                <DnDListener 
                    onDrop = {handleDrop}
                    listenAny = {true}
                    data-testid = 'listener' 
                />
            </Builder>);
            const listener = screen.getByTestId('listener'); 
            const {top, left} = listener.getBoundingClientRect();
            fireEvent.touchEnd(document, {
                changedTouches: [{
                    // Outside bounds
                    clientX: left - 1,
                    clientY: top - 1,
                }]
            });
            expect(handleDrop).toHaveBeenCalledTimes(0);            
        });

    });

});