import React from 'react';

import {createEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import Builder from '../../../components/Builder';
import useDnDHelpers from '../../../hooks/dnd/useDnDHelpers';
import {itemid, branch, item} from '../../../utils/tree';

describe('useDnDHelpers', () => {

    const id = itemid();
    const initialTree = branch(
        item({
            __id__: id,
            type: 'TypeA',
        })
    );

    describe('DnD helper functions', () => {

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
            const hook = renderHook(() => useDnDHelpers(), {wrapper: wrapper});
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
            const hook = renderHook(() => useDnDHelpers(), {wrapper: wrapper});
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