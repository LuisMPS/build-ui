import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../components/Builder';
import ChildrenDropListener from '../../components/ChildrenDropListener';
import {startTransfer} from '../../slices/transfer';

const ChildrenDropTestComponent = ({
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

describe('<ChildrenDropListener />', () => {

    describe('should throw errors', () => {

        // Avoid error throw to pollute
        // console error, since it is
        // precisely what we are testing.
        beforeAll(() => {
            jest.spyOn(console, 'error')
            console.error.mockImplementation(() => {})
        });
          
        // Clear mock for console
        // error for any further 
        // tests.
        afterAll(() => {
            console.error.mockRestore()
        });
    
        test('should throw error when no children are provided', () => {
            expect(() => {
                render(<Builder>
                    <ChildrenDropListener />
                </Builder>);
            }).toThrowError();
        });
        
    });

    test('should pass down props to children components wrappers', () => {
        render(<Builder>
            <ChildrenDropListener data-testid = 'drops'>
                <div>Child_1</div>
                <div>Child_2</div>
            </ChildrenDropListener>
        </Builder>);
        const wrappers = screen.getAllByTestId('drops');
        expect(wrappers).toHaveLength(2);
    });

    test('should call onDrop with correct position', () => {
        const handleDrop = jest.fn();
        render(<Builder>
            <ChildrenDropTestComponent 
                transfering = {true} 
                transferType = 'builder'
            />
            <ChildrenDropListener
                onDrop = {handleDrop}
                listenTransferType = 'builder'
                data-testid = 'drops'
            >
                <div>Child_0</div>
                <div>Child_1</div>
                <div>Child_2</div>
                <div>Child_3</div>
            </ChildrenDropListener>
        </Builder>);
        const wrappers = screen.getAllByTestId('drops');
        const last_wrapper_position = 3;
        const last_wrapper = wrappers[last_wrapper_position];
        fireEvent.drop(last_wrapper);
        expect(handleDrop).toHaveBeenCalledTimes(1);
        expect(handleDrop.mock.calls[0][1]).toBe(last_wrapper_position);
    })

});