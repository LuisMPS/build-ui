import React from 'react';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../components/Builder';
import Workspace from '../../components/Workspace';
import {branch, item} from '../../utils/tree';

describe('<Workspace />', () => {

    const initialTree = branch(
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
    );

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
    
        test('should throw error when view prop is not an object', () => {
            expect(() => {
                render(<Builder initialTree = {initialTree}>
                    <Workspace />
                </Builder>);
            }).toThrowError();
            expect(() => {
                render(<Builder initialTree = {initialTree}>
                    <Workspace view = {null} />
                </Builder>);
            }).toThrowError();
        });

    });

    test('should fully render full tree when view matches all types', () => {
        const view = {
            Type_1: jest.fn(props => <div {...props} />), 
            Type_2: jest.fn(props => <div {...props} />), 
            Type_3: jest.fn(props => <div {...props} />),
        };
        render(<Builder initialTree = {initialTree}>
            <Workspace view = {view} />
        </Builder>);
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
        render(<Builder initialTree = {initialTree}>
            <Workspace view = {view} />
        </Builder>);
        expect(view.Type_1).toHaveBeenCalledTimes(1);
        expect(view.Type_2).toHaveBeenCalledTimes(1);
        expect(view.Type_4).toHaveBeenCalledTimes(0);
    });

    test('should not render anything when there is not a root type match', () => {
        const {container} = render(<Builder initialTree = {initialTree}>
            <Workspace view = {{}} />
        </Builder>);
        expect(container).toBeEmptyDOMElement();
    });

    test('should not render anything when there is no tree set', () => {
        const {container} = render(<Builder>
            <Workspace view = {{}} />
        </Builder>);
        expect(container).toBeEmptyDOMElement();
    });

    

});
  