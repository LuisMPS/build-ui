import React from 'react';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../Builder';
import Workspace from '../Workspace';
import {branch, item} from '../../utils/tree';

const renderInsideBuilder = (ui, options = {}) => {
    const tree = branch(
        item({
            type: 'Type_1',
        })
    ).with_child(
        item({
            type: 'Type_2',
        })
    ).with_child(
        branch(
            item({
                type: 'Type_3',
            })
        ).with_child(
            item({
                type: 'Type_2',
            })
        )
    )
    return render(
        <Builder initialTree = {tree}>
            {ui}
        </Builder>,
        {...options}
    );      
}

describe('<Workspace />', () => {

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
    
        test('should throw error when view prop has no properties', () => {
            expect(() => {
                renderInsideBuilder(<Workspace />);
            }).toThrowError();
            expect(() => {
                renderInsideBuilder(<Workspace view = {null} />);
            }).toThrowError();
        });

    });

    test('should fully render full tree when view matches all types', () => {
        const view = {
            Type_1: jest.fn(props => <div {...props} />), 
            Type_2: jest.fn(props => <div {...props} />), 
            Type_3: jest.fn(props => <div {...props} />),
        };
        renderInsideBuilder(<Workspace view = {view} />);
        expect(view.Type_1).toHaveBeenCalledTimes(1);
        expect(view.Type_2).toHaveBeenCalledTimes(2);
        expect(view.Type_3).toHaveBeenCalledTimes(1);
    });

    test('should partly render tree when view matches some types only', () => {
        const view = {
            Type_1: jest.fn(props => <div {...props} />), 
            Type_2: jest.fn(props => <div {...props} />), 
            Type_4: jest.fn(props => <div {...props} />),
        };
        renderInsideBuilder(<Workspace view = {view} />);
        expect(view.Type_1).toHaveBeenCalledTimes(1);
        expect(view.Type_2).toHaveBeenCalledTimes(1);
        expect(view.Type_4).toHaveBeenCalledTimes(0);
    });

    test('should not render anything when there is not a root type match', () => {
        const {container} = renderInsideBuilder(<Workspace view = {{}} />);
        expect(container).toBeEmptyDOMElement();
    });

    test('should not render anything when there is no tree set', () => {
        const {container} = render(<Builder>
            <Workspace view = {{}} />
        </Builder>);
        expect(container).toBeEmptyDOMElement();
    });

    

});
  