import React from 'react';

import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import Builder from '../../../components/Builder';
import useCollector from '../../../hooks/collectors/useCollector';
import {branch, item, itemid} from '../../../utils/tree';

describe('useCollector', () => {

    const id_1 = itemid();
    const id_2 = itemid();
    const id_3 = itemid();

    const initialTree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
            props: {number: 1}
        })
    )
    .with_child(
        branch(
            item({
                __id__: id_2,
                type: 'TypeB',
                props: {number: 2},
            })
            .with_index(
                'last_modified'
            )
            .with_meta({
                visible: true,
                locked: false,
            })
        )
        .with_child(
            item({
                __id__: id_3,
                type: 'TypeC',
                props: {number: 3}
            })
            .with_index(
                'panel',
                'deepest'
            )
        )
    );

    const wrapper = ({children}) => (
        <Builder initialTree = {initialTree}>
        {children}
        </Builder>
    );

    describe('collector selectors', () => {
    
        test('should collect correctly with id selector', () => {
            const selector = selectors => (
                selectors.selectById(id_2)
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.node.id).toEqual(id_2);
        });

        test('should collect correctly with root selector', () => {
            const selector = selectors => (
                selectors.selectRoot()
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.node.id).toEqual(id_1);
        });

        test('should collect correctly with index selector', () => {
            const selector = selectors => (
                selectors.selectByIndex('panel')
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.node.id).toEqual(id_3);
        });

        test('should collect correctly with parent selector', () => {
            const selector = selectors => (
                selectors.selectParent(id_3)
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.node.id).toEqual(id_2);
        });

        test('should collect correctly with filter selector', () => {
            const filter = node => node.type === 'TypeC';
            const selector = selectors => (
                selectors.selectByFilter(filter)
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.node.id).toEqual(id_3);
        });

        test('should collect correctly with finder selector', () => {
            const finder = state => state.root;
            const selector = selectors => (
                selectors.selectByFinder(finder)
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.node.id).toEqual(id_1);
        });

    });

    describe('collector return node', () => {

        test('should return correct node information', () => {
            // Chose a random selector for
            // this since the purpose
            // of this test is to verify
            // that correct node is return
            // instead of applying a particular
            // selector.
            const selector = selectors => (
                selectors.selectById(id_1)
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            // Node information validation
            // All information is tested.
            expect(collected.node.id).toEqual(id_1);
            expect(collected.node.childIds).toContain(id_2)
            expect(collected.node.props).toEqual({number: 1});
            expect(collected.node.type).toEqual('TypeA');
        });

    });

    describe('collector return meta', () => {

        test('should return correct meta information', () => {
            // Chose a random selector for
            // this since the purpose
            // of this test is to verify
            // that correct node is return
            // instead of applying a particular
            // selector.
            const selector = selectors => (
                selectors.selectById(id_2)
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            // It is expected that meta 
            // should contain id of node
            // as well.
            expect(collected.meta).toEqual({
                id: id_2,
                visible: true,
                locked: false
            });
        });

    });

    describe('collector return indexes', () => {

        test('should return correct indexes', () => {
            // Chose a random selector for
            // this since the purpose
            // of this test is to verify
            // that correct node is return
            // instead of applying a particular
            // selector.
            const selector = selectors => (
                selectors.selectById(id_3)
            );
            const hook = renderHook(() => useCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            // Matched indexes should
            // return true.
            expect(collected.indexes.panel).toBe(true);
            expect(collected.indexes.deepest).toBe(true);
            // Indexes not matched by
            // collected node or not 
            // createdas an index in 
            // tree should return false.
            expect(collected.indexes.last_modified).toBe(false);
            expect(collected.indexes.non_existent).toBe(false);
        });

    });

    test('should return null fields when selector cannot resolve', () => {
        const id_fake = itemid();
        const selector = selectors => (
            selectors.selectById(id_fake)
        );
        const hook = renderHook(() => useCollector({
            selector: selector
        }), {wrapper: wrapper});
        const collected = hook.result.current;
        expect(collected.node).toBeUndefined();
        expect(collected.meta).toBeUndefined();
        expect(collected.indexes.any).toBeFalsy();
    });

    test('should throw when not passing any selector', () => {
        const hook = renderHook(() => useCollector({}), {wrapper: wrapper});
        expect(hook.result.error).toBeDefined();
    });

    test('should throw when not selector is not a function', () => {
        const hook = renderHook(() => useCollector({
            selector: 5
        }), {wrapper: wrapper});
        expect(hook.result.error).toBeDefined();
    });

})