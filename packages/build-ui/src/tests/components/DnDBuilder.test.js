import React from 'react';

import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../components/Builder';
import DnDBuilder from '../../components/DnDBuilder';

// All other tests concerting root 
// DnDSource element and logic related
// to handling only transfers with 
// corresponding transferType are taken 
// care of in DnDListener test suite.

describe('<DnDBuilder />', () => {

    test('should pass non-dnd props down to root element', () => {
        const handleClick = jest.fn();
        render(<Builder>
            <DnDBuilder
                onClick = {handleClick}
                data-testid = 'builder'
            >
                <p>Child Prop</p>
            </DnDBuilder>
        </Builder>);
        const builder = screen.getByTestId('builder');
        fireEvent.click(builder);
        expect(builder).toBeInTheDocument();
        expect(screen.getByText(/child/i)).toBeInTheDocument();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

});