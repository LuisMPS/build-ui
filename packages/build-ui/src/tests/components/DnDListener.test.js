import React from 'react';

import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../components/Builder';
import DnDListener from '../../components/DnDListener';


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
    
   });

});