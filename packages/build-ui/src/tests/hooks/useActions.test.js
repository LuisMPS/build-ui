import React, {useEffect} from 'react';

import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {TreeTestComponent} from './test-components';

import Builder from '../../components/Builder';
import Workspace from '../../components/Workspace';
import useActions from '../../hooks/useActions';
import {branch, item, itemid} from '../../utils/tree';

const ActionsHookTestComponent = ({
    id,
    ...props
}) => {
    const actions = useActions();
    const handleSelect = event => {
        event.stopPropagation();
        actions.triggerListIndexToggle({
            id: id,
            name: 'selected'
        });
        actions.triggerIndexToggle({
            id: id,
            name: 'outlined'
        })
    }
    return <div 
        onClick = {handleSelect}
        {...props}
    />
}

const ActionsDocumentComponent = () => {
    const actions = useActions();
    useEffect(() => {
        const handleDeselect = () => {
            actions.triggerListIndexClear({
                name: 'selected'
            });
            actions.triggerIndexClear({
                name: 'outlined'
            })
        }
        document.addEventListener(
            'click',
            handleDeselect,
        );
        return () => {
            document.removeEventListener(
                'click',
                handleDeselect,
            );
        }
    }, [
        actions.triggerListIndexClear,
        actions.triggerIndexClear,
    ]);
    return null;
}

// Several tests concerning actions
// have already been done in 
// useEditor hook tests. Test done
// here handle more specific cases
// as well as a couple of edge cases.

beforeAll(() => {
    jest.useFakeTimers();
})

afterEach(() => {
    jest.runOnlyPendingTimers();
});

afterAll(() => {
    jest.useRealTimers();
})

describe('useActions', () => {

    const id_1 = itemid();
    const id_2 = itemid();

    const initialTree = branch(
        item({
            __id__: id_1,
            type: 'Actions',
            props: {'data-testid': 'actions_1'}
        })
    )
    .with_child(
        item({
            __id__: id_2,
            type: 'Actions',
            props: {'data-testid': 'actions_2'}
        })
    );

    const view = {
        Actions: ActionsHookTestComponent
    };

    test('should trigger index clear', () => {
        const onTree = jest.fn();
        render(<Builder initialTree = {initialTree}>
            <Workspace view = {view} />
            <ActionsDocumentComponent />
            <TreeTestComponent onTree = {onTree} />
        </Builder>);      
        const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
        const actions_1 = screen.getByTestId('actions_1');
        fireEvent.click(actions_1);
        expect(getTree().index.outlined).toBe(id_1);
        const actions_2 = screen.getByTestId('actions_2');
        fireEvent.click(actions_2);
        expect(getTree().index.outlined).toBe(id_2);
        fireEvent.click(document);
        expect(getTree().index.outlined).toBeFalsy();
    });

    test('should trigger index list clear', () => {
        const onTree = jest.fn();
        render(<Builder initialTree = {initialTree}>
            <Workspace view = {view} />
            <ActionsDocumentComponent />
            <TreeTestComponent onTree = {onTree} />
        </Builder>);      
        const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]
        const actions_1 = screen.getByTestId('actions_1');
        fireEvent.click(actions_1);
        expect(getTree().index_list.selected).toContain(id_1);
        const actions_2 = screen.getByTestId('actions_2');
        fireEvent.click(actions_2);
        expect(getTree().index_list.selected).toContain(id_2);
        fireEvent.click(document);
        expect(getTree().index_list.selected.length).toBe(0);
    });


});
