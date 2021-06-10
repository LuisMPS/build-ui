import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Builder from '../../components/Builder';
import {getTreeSlice} from '../../selectors';
import {getTreeFromSlice} from '../../selectors/tree';
import {branch, plainBranch, item, itemid} from '../../utils/tree';

const BuilderTestComponent = ({
    onTree = () => {},
    onHistoryConfigure = () => {},
    onBatchConfigure = () => {},
}) => {
    const selector = store => (
        getTreeSlice(store)
    );
    const slice = useSelector(
        selector
    );
    const tree = getTreeFromSlice(
        slice
    );
    useEffect(() => {
        onTree(tree);
        onHistoryConfigure(slice.configuration);
        onBatchConfigure(slice.batch.configuration);
    });
    return null;
}

describe('<Builder />', () => {

    test('should render passed children', () => {
        render(<Builder>
            <div>Child Component</div>
        </Builder>);
        expect(screen.getByText(/child/i)).toBeInTheDocument();
    });

    test('should initialize default tree', () => {
        const defaultTree = {
            root: null,
            byIds: {},
            meta: {},
            index: {},
            index_list: {},
        }
        const handleTree = jest.fn();
        render(<Builder>
            <BuilderTestComponent onTree = {handleTree} />
        </Builder>);
        const getTree = () => handleTree.mock.calls[handleTree.mock.calls.length - 1][0]
        expect(getTree()).toEqual(defaultTree);
    });

    test('should initialize default history configuration', () => {
        const handleHistoryConfigure = jest.fn();
        render(<Builder>
            <BuilderTestComponent onHistoryConfigure = {handleHistoryConfigure} />
        </Builder>);
        expect(handleHistoryConfigure).toHaveBeenLastCalledWith(
            expect.objectContaining({
                historyLimit: expect.any(Number),
            })
        );
    });

    test('should initialize default batch configuration', () => {
        const handleBatchConfigure = jest.fn();
        render(<Builder>
            <BuilderTestComponent onBatchConfigure = {handleBatchConfigure} />
        </Builder>);
        expect(handleBatchConfigure).toHaveBeenLastCalledWith(
            expect.objectContaining({
                batchTime: expect.any(Number),
                batchTimeLimit: expect.any(Number),
            })
        );
    });

    test('should initialize passed tree', () => {
        const id = itemid();
        const tree = branch(
            item({
                __id__: id,
                type: 'Any',
                props: {}
            })
        );
        const handleTree = jest.fn();
        render(<Builder initialTree = {tree}>
            <BuilderTestComponent onTree = {handleTree} />
        </Builder>);
        const getTree = () => handleTree.mock.calls[handleTree.mock.calls.length - 1][0]
        expect(getTree()).toEqual(plainBranch(tree));
    });

    test('should initialize passed history configuration', () => {
        const handleHistoryConfigure = jest.fn();
        render(<Builder initialHistoryLimit = {69}>
            <BuilderTestComponent onHistoryConfigure = {handleHistoryConfigure} />
        </Builder>);
        expect(handleHistoryConfigure).toHaveBeenLastCalledWith(
            expect.objectContaining({
                historyLimit: 69
            })
        );
    });

    test('should initialize passed batch configuration', () => {
        const handleBatchConfigure = jest.fn();
        render(<Builder 
            initialBatchTime = {420}
            initialBatchTimeLimit = {420*3}
        >
            <BuilderTestComponent onBatchConfigure = {handleBatchConfigure} />
        </Builder>);
        expect(handleBatchConfigure).toHaveBeenLastCalledWith(
            expect.objectContaining({
                batchTime: 420,
                batchTimeLimit: 420*3
            })
        );
    });

})  