import React from 'react';

import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import Builder from '../../../components/Builder';
import useMultiCollector from '../../../hooks/collectors/useMultiCollector';
import {branch, item, itemid} from '../../../utils/tree';

describe('useMulticollector', () => {

    const id_1 = itemid();
    const id_2 = itemid();
    const id_3 = itemid();

    const initialTree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
            props: {number: 1}
        })
        .with_meta({
            visible: true,
            locked: true,
        })
        .with_index_list(
            'selected'
        )
    )
    .with_child(
        branch(
            item({
                __id__: id_2,
                type: 'TypeB',
                props: {number: 2},
            })
            .with_index_list(
                'deselected'
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
            .with_index_list(
                'selected'
            )
        )
    );

    const wrapper = ({children}) => (
        <Builder initialTree = {initialTree}>
        {children}
        </Builder>
    );

    describe('collector selectors', () => {
    
        test('should collect correctly with multiple id selector', () => {
            const selector = selectors => (
                selectors.selectMultipleById(id_1, id_2)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toHaveProperty(id_1);
            expect(collected.nodes).toHaveProperty(id_2);
            // Just making sure it does not
            // include another node which
            // was not specified.
            expect(collected.nodes).not.toHaveProperty(id_3);
        });

        test('should collect correctly with parents selector', () => {
            const selector = selectors => (
                selectors.selectParents(id_3)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toHaveProperty(id_1);
            expect(collected.nodes).toHaveProperty(id_2);
        });

        test('should collect correctly with index list selector', () => {
            const selector = selectors => (
                selectors.selectMultipleByIndex('selected')
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toHaveProperty(id_1);
            expect(collected.nodes).toHaveProperty(id_3);
        });
        
        test('should collect empty object with unexistent index list selector', () => {
            const selector = selectors => (
                selectors.selectMultipleByIndex('fake')
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toEqual({})
        });

        test('should collect correctly with filter selector', () => {
            const filter = node => node.props.number > 2;
            const selector = selectors => (
                selectors.selectMultipleByFilter(filter)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toHaveProperty(id_3);
        });

        test('should collect correctly with finder selector', () => {
            const finder = state => [state.root];
            const selector = selectors => (
                selectors.selectMultipleByFinder(finder)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toHaveProperty(id_1);
        });

        test('should collect correctly with children', () => {
            const selector = selectors => (
                selectors.selectChildren(id_2)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toHaveProperty(id_3);
        });

        test('should collect correctly with direct children', () => {
            const selector = selectors => (
                selectors.selectDirectChildren(id_1)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            expect(collected.nodes).toHaveProperty(id_2);
            // Should not include children
            // with higher depth in nodes.
            expect(collected.nodes).not.toHaveProperty(id_3);
        });

    });

    describe('collector return node', () => {

        test('should return correct nodes information', () => {
            // Chose a random selector for
            // this since the purpose
            // of this test is to verify
            // that correct node is return
            // instead of applying a particular
            // selector.
            const selector = selectors => (
                selectors.selectMultipleById(id_1, id_2)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            // Node information validation
            // All information is tested.
            expect(collected.nodes[id_2].id).toEqual(id_2);
            expect(collected.nodes[id_2].childIds).toContain(id_3)
            expect(collected.nodes[id_1].props).toEqual({number: 1});
            expect(collected.nodes[id_1].type).toEqual('TypeA');
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
                selectors.selectMultipleById(id_1, id_2)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            // It is expected that meta 
            // should contain id of node
            // as well.
            expect(collected.meta[id_1]).toEqual({
                id: id_1,
                visible: true,
                locked: true,
            });
            expect(collected.meta[id_2]).toEqual({
                id: id_2,
                visible: true,
                locked: false,
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
                selectors.selectMultipleById(id_2, id_3)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            // Matched indexes should
            // return true.
            expect(collected.indexes[id_2].deselected).toBe(true);
            expect(collected.indexes[id_3].selected).toBe(true);
            // Indexes not matched by
            // collected node or not 
            // createdas an index in 
            // tree should return false.
            expect(collected.indexes[id_2].non_existent).toBe(false);
            expect(collected.indexes[id_3].deselected).toBe(false);
        });

    });

    describe('collector utility functions', () => {

        test('should list node ids correctly', () => {
            const selector = selectors => (
                selectors.selectMultipleById(id_3, id_1)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            const nodeIds = collected.listIds();
            expect(nodeIds.length).toBe(2);
            expect(nodeIds).toContain(id_3);
            expect(nodeIds).toContain(id_1);
        });

        test('should list nodes correctly', () => {
            const selector = selectors => (
                selectors.selectMultipleById(id_2)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            const nodes = collected.listNodes();
            expect(nodes.length).toBe(1);
            expect(nodes).toContainEqual({
                id: id_2,
                type: 'TypeB',
                props: {number: 2},
                childIds: [id_3],
                parentId: id_1
            });
        });

        test('should list node meta correctly', () => {
            const selector = selectors => (
                selectors.selectMultipleById(id_2)
            );
            const hook = renderHook(() => useMultiCollector({
                selector: selector
            }), {wrapper: wrapper});
            const collected = hook.result.current;
            const meta = collected.listMeta();
            expect(meta.length).toBe(1);
            expect(meta).toContainEqual({
                id: id_2,
                visible: true,
                locked: false,
            });
        });

    });

    test('should return empty objects when selector cannot resolve', () => {
        const id_fake = itemid();
        const selector = selectors => (
            selectors.selectMultipleById(id_fake)
        );
        const hook = renderHook(() => useMultiCollector({
            selector: selector
        }), {wrapper: wrapper});
        const collected = hook.result.current;
        expect(collected.nodes).toMatchObject({});
        expect(collected.meta).toMatchObject({});
        expect(collected.indexes).toMatchObject({});
    });

    test('should throw when not passing any selector', () => {
        const hook = renderHook(() => useMultiCollector({}), {wrapper: wrapper});
        expect(hook.result.error).toBeDefined();
    });

    test('should throw when not selector is not a function', () => {
        const hook = renderHook(() => useMultiCollector({
            selector: 5
        }), {wrapper: wrapper});
        expect(hook.result.error).toBeDefined();
    });

})