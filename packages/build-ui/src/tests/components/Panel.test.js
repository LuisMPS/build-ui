import React from 'react';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../components/Builder';
import Panel from '../../components/Panel';
import {branch, item} from '../../utils/tree';


describe('<Panel />', () => {

    const initialTree = branch(
        item({
            type: 'Type_1',
        })
        .with_index(
            'panel'
        )
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
                    <Panel />
                </Builder>);
            }).toThrowError();
            expect(() => {
                render(<Builder initialTree = {initialTree}>
                    <Panel view = {null} />
                </Builder>);
            }).toThrowError();
        });

    });

    test('should render view component when there is a view type match', () => {
        const Component = jest.fn(props => <div {...props} />);
        const view = {Type_1: Component}
        render(<Builder initialTree = {initialTree}>
            <Panel view = {view} />
        </Builder>);
        expect(Component).toHaveBeenCalledTimes(1);
    });

    test('should not render anything when there is not a view type match', () => {
        const Component = jest.fn(props => <div {...props} />);
        const view = {Type_2: Component}
        const {container} = render(<Builder initialTree = {initialTree}>
            <Panel view = {view} />
        </Builder>);
        expect(container).toBeEmptyDOMElement();
    });

    test('should not render anything when there is no tree set', () => {
        const {container} = render(<Builder>
            <Panel view = {{}} />
        </Builder>);
        expect(container).toBeEmptyDOMElement();
    });


})