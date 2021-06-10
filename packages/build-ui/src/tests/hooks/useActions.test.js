import React from 'react';

import {renderHook, act} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import {TreeTestComponent} from './test-components';

import Builder from '../../components/Builder';
import useActions from '../../hooks/useActions';
import {branch, item, itemid} from '../../utils/tree';

describe('useActions', () => {

    const id_1 = itemid();
    const id_2 = itemid();
    const id_3 = itemid();
    const id_4 = itemid();

    const initialTree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_index_list(
            'selected'
        )
    )
    .with_child(
        item({
            __id__: id_2,
            type: 'TypeA',
        })
    )
    .with_child(
        branch(
            item({
                __id__: id_3,
                type: 'TypeA',
                props: {text: 'Text'}
            })
            .with_index(
                'panel'
            )
        ).with_child(
            item({
                __id__: id_4,
                type: 'TypeA',
            })
        )
    );

    describe('changes to tree on action trigger', () => {

        const onTree = jest.fn();
        const getTree = () => onTree.mock.calls[onTree.mock.calls.length - 1][0]

        afterEach(() => {
            onTree.mockReset();
        });

        const wrapper = ({children, onTree}) => (
            <Builder initialTree = {initialTree}>
                <TreeTestComponent onTree = {onTree} />
                {children}
            </Builder>
        );
        const initialProps = {onTree: onTree}

        describe('unrecorded triggers', () => {

            test('should trigger create to append child node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current; 
                const id = itemid();
                const root = item({__id__: id, type: 'TypeA'});
                const node = branch(root);
                act(() => actions.unrecorded.triggerCreate({targetId: id_3, node: node}));
                expect(getTree().byIds[id_3].childIds.length).toBe(2);
                expect(getTree().byIds[id]).toBeDefined();
            });
    
            test('should trigger delete for node and all of its children', () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unrecorded.triggerDelete({id: id_4}));
                expect(getTree().byIds[id_4]).toBeUndefined();
            });
    
            test('should trigger move for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;            
                act(() => actions.unrecorded.triggerMove({id: id_3, targetId: id_1}));
                expect(getTree().byIds[id_3].parentId).toBe(id_1)
                expect(getTree().byIds[id_1].childIds).toContain(id_3);
            });
    
            test('should trigger shift for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;     
                act(() => actions.unrecorded.triggerShift({id: id_3, absolute: 0}));
                expect(getTree().byIds[id_1].childIds[0]).toBe(id_3);
                expect(getTree().byIds[id_1].childIds[1]).toBe(id_2);
            });
    
            test('should trigger update for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;        
                act(() => actions.unrecorded.triggerUpdate({
                    id: id_3, 
                    props: {text: 'Unrecorded'}
                }));
                expect(getTree().byIds[id_3].props).toEqual({text: 'Unrecorded'});
            });
    
            test('should trigger rewrite for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;       
                act(() => actions.unrecorded.triggerRewrite({
                    id: id_3, 
                    props: {unrecorded: true}
                }));
                expect(getTree().byIds[id_3].props).toEqual({unrecorded: true});
            });
    
            test('should trigger meta update for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.unrecorded.triggerMetaUpdate({
                    id: id_3,
                    meta: {fixed: true}
                }));
                expect(getTree().meta[id_3]).toHaveProperty('fixed', true);
            });
    
            test('should trigger index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});   
                const actions = hook.result.current;     
                act(() => actions.unrecorded.triggerIndexAdd({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBe(id_3);
                act(() => actions.unrecorded.triggerIndexRemove({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBeFalsy();
            });
    
            test('should trigger index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.unrecorded.triggerIndexToggle({
                    id: id_3, 
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).toBe(id_3)
                // Trigger toggle again
                act(() => actions.unrecorded.triggerIndexToggle({
                    id: id_3,
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).not.toBe(id_3);
            });
    
            test('should trigger list index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.unrecorded.triggerListIndexAdd({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).toContain(id_3)
                act(() => actions.unrecorded.triggerListIndexRemove({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).not.toContain(id_3);
            });
    
            test('should trigger list index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;          
                act(() => actions.unrecorded.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).toContain(id_3)
                // Trigger toggle again
                act(() => actions.unrecorded.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).not.toContain(id_3);
            });
    
            test('should trigger index clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unrecorded.triggerIndexClear({name: 'panel'}));
                expect(getTree().index.panel).toBeNull();
            });
        
            test('should trigger index list clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unrecorded.triggerListIndexClear({name: 'selected'}));
                expect(getTree().index_list.selected).toEqual([]);
            });

        });

        describe('unbatched triggers', () => {

            test('should trigger create to append child node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current; 
                const id = itemid();
                const root = item({__id__: id, type: 'TypeA'});
                const node = branch(root);
                act(() => actions.unbatched.triggerCreate({targetId: id_3, node: node}));
                expect(getTree().byIds[id_3].childIds.length).toBe(2);
                expect(getTree().byIds[id]).toBeDefined();
            });
    
            test('should trigger delete for node and all of its children', () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unbatched.triggerDelete({id: id_4}));
                expect(getTree().byIds[id_4]).toBeUndefined();
            });
    
            test('should trigger move for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;            
                act(() => actions.unbatched.triggerMove({id: id_3, targetId: id_1}));
                expect(getTree().byIds[id_3].parentId).toBe(id_1)
                expect(getTree().byIds[id_1].childIds).toContain(id_3);
            });
    
            test('should trigger shift for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;     
                act(() => actions.unbatched.triggerShift({id: id_3, absolute: 0}));
                expect(getTree().byIds[id_1].childIds[0]).toBe(id_3);
                expect(getTree().byIds[id_1].childIds[1]).toBe(id_2);
            });
    
            test('should trigger update for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;        
                act(() => actions.unbatched.triggerUpdate({
                    id: id_3, 
                    props: {text: 'Unbatched'}
                }));
                expect(getTree().byIds[id_3].props).toEqual({text: 'Unbatched'});
            });
    
            test('should trigger rewrite for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;       
                act(() => actions.unbatched.triggerRewrite({
                    id: id_3, 
                    props: {unbatched: true}
                }));
                expect(getTree().byIds[id_3].props).toEqual({unbatched: true});
            });
    
            test('should trigger meta update for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.unbatched.triggerMetaUpdate({
                    id: id_3,
                    meta: {fixed: true}
                }));
                expect(getTree().meta[id_3]).toHaveProperty('fixed', true);
            });
    
            test('should trigger index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});   
                const actions = hook.result.current;     
                act(() => actions.unbatched.triggerIndexAdd({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBe(id_3);
                act(() => actions.unbatched.triggerIndexRemove({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBeFalsy();
            });
    
            test('should trigger index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.unbatched.triggerIndexToggle({
                    id: id_3, 
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).toBe(id_3)
                // Trigger toggle again
                act(() => actions.unbatched.triggerIndexToggle({
                    id: id_3,
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).not.toBe(id_3);
            });
    
            test('should trigger list index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.unbatched.triggerListIndexAdd({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).toContain(id_3)
                act(() => actions.unbatched.triggerListIndexRemove({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).not.toContain(id_3);
            });
    
            test('should trigger list index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;          
                act(() => actions.unbatched.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).toContain(id_3)
                // Trigger toggle again
                act(() => actions.unbatched.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).not.toContain(id_3);
            });
    
            test('should trigger index clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unbatched.triggerIndexClear({name: 'panel'}));
                expect(getTree().index.panel).toBeNull();
            });
        
            test('should trigger index list clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unbatched.triggerListIndexClear({name: 'selected'}));
                expect(getTree().index_list.selected).toEqual([]);
            });

        });

        describe('batched triggers', () => {

            test('should trigger create to append child node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current; 
                const id = itemid();
                const root = item({__id__: id, type: 'TypeA'});
                const node = branch(root);
                act(() => actions.batched.triggerCreate({targetId: id_3, node: node}));
                expect(getTree().byIds[id_3].childIds.length).toBe(2);
                expect(getTree().byIds[id]).toBeDefined();
            });
    
            test('should trigger delete for node and all of its children', () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.batched.triggerDelete({id: id_4}));
                expect(getTree().byIds[id_4]).toBeUndefined();
            });
    
            test('should trigger move for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;            
                act(() => actions.batched.triggerMove({id: id_3, targetId: id_1}));
                expect(getTree().byIds[id_3].parentId).toBe(id_1)
                expect(getTree().byIds[id_1].childIds).toContain(id_3);
            });
    
            test('should trigger shift for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;     
                act(() => actions.batched.triggerShift({id: id_3, absolute: 0}));
                expect(getTree().byIds[id_1].childIds[0]).toBe(id_3);
                expect(getTree().byIds[id_1].childIds[1]).toBe(id_2);
            });
    
            test('should trigger update for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;        
                act(() => actions.batched.triggerUpdate({
                    id: id_3, 
                    props: {text: 'batched'}
                }));
                expect(getTree().byIds[id_3].props).toEqual({text: 'batched'});
            });
    
            test('should trigger rewrite for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;       
                act(() => actions.batched.triggerRewrite({
                    id: id_3, 
                    props: {batched: true}
                }));
                expect(getTree().byIds[id_3].props).toEqual({batched: true});
            });
    
            test('should trigger meta update for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.batched.triggerMetaUpdate({
                    id: id_3,
                    meta: {fixed: true}
                }));
                expect(getTree().meta[id_3]).toHaveProperty('fixed', true);
            });
    
            test('should trigger index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});   
                const actions = hook.result.current;     
                act(() => actions.batched.triggerIndexAdd({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBe(id_3);
                act(() => actions.batched.triggerIndexRemove({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBeFalsy();
            });
    
            test('should trigger index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.batched.triggerIndexToggle({
                    id: id_3, 
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).toBe(id_3)
                // Trigger toggle again
                act(() => actions.batched.triggerIndexToggle({
                    id: id_3,
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).not.toBe(id_3);
            });
    
            test('should trigger list index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.batched.triggerListIndexAdd({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).toContain(id_3)
                act(() => actions.batched.triggerListIndexRemove({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).not.toContain(id_3);
            });
    
            test('should trigger list index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;          
                act(() => actions.batched.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).toContain(id_3)
                // Trigger toggle again
                act(() => actions.batched.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).not.toContain(id_3);
            });
    
            test('should trigger index clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.batched.triggerIndexClear({name: 'panel'}));
                expect(getTree().index.panel).toBeNull();
            });
        
            test('should trigger index list clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.batched.triggerListIndexClear({name: 'selected'}));
                expect(getTree().index_list.selected).toEqual([]);
            });

        });

        describe('time batched triggers', () => {

            beforeAll(() => {
                jest.useFakeTimers();
            })
            
            afterEach(() => {
                jest.runOnlyPendingTimers();
            })
            
            afterAll(() => {
                jest.useRealTimers();
            })

            test('should trigger create to append child node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current; 
                const id = itemid();
                const root = item({__id__: id, type: 'TypeA'});
                const node = branch(root);
                act(() => actions.timeBatched.triggerCreate({targetId: id_3, node: node}));
                expect(getTree().byIds[id_3].childIds.length).toBe(2);
                expect(getTree().byIds[id]).toBeDefined();
            });
    
            test('should trigger delete for node and all of its children', () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.timeBatched.triggerDelete({id: id_4}));
                expect(getTree().byIds[id_4]).toBeUndefined();
            });
    
            test('should trigger move for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;            
                act(() => actions.timeBatched.triggerMove({id: id_3, targetId: id_1}));
                expect(getTree().byIds[id_3].parentId).toBe(id_1)
                expect(getTree().byIds[id_1].childIds).toContain(id_3);
            });
    
            test('should trigger shift for node in tree', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;     
                act(() => actions.timeBatched.triggerShift({id: id_3, absolute: 0}));
                expect(getTree().byIds[id_1].childIds[0]).toBe(id_3);
                expect(getTree().byIds[id_1].childIds[1]).toBe(id_2);
            });
    
            test('should trigger update for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;        
                act(() => actions.timeBatched.triggerUpdate({
                    id: id_3, 
                    props: {text: 'timeBatched'}
                }));
                expect(getTree().byIds[id_3].props).toEqual({text: 'timeBatched'});
            });
    
            test('should trigger rewrite for node props', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});    
                const actions = hook.result.current;       
                act(() => actions.timeBatched.triggerRewrite({
                    id: id_3, 
                    props: {timeBatched: true}
                }));
                expect(getTree().byIds[id_3].props).toEqual({timeBatched: true});
            });
    
            test('should trigger meta update for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.timeBatched.triggerMetaUpdate({
                    id: id_3,
                    meta: {fixed: true}
                }));
                expect(getTree().meta[id_3]).toHaveProperty('fixed', true);
            });
    
            test('should trigger index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});   
                const actions = hook.result.current;     
                act(() => actions.timeBatched.triggerIndexAdd({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBe(id_3);
                act(() => actions.timeBatched.triggerIndexRemove({
                    id: id_3, 
                    name: 'panel'
                }));
                expect(getTree().index.panel).toBeFalsy();
            });
    
            test('should trigger index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.timeBatched.triggerIndexToggle({
                    id: id_3, 
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).toBe(id_3)
                // Trigger toggle again
                act(() => actions.timeBatched.triggerIndexToggle({
                    id: id_3,
                    name: 'outlined'
                }));
                expect(getTree().index.outlined).not.toBe(id_3);
            });
    
            test('should trigger list index add and remove for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});
                const actions = hook.result.current;        
                act(() => actions.timeBatched.triggerListIndexAdd({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).toContain(id_3)
                act(() => actions.timeBatched.triggerListIndexRemove({
                    id: id_3,
                    name: 'reseted'
                }));
                expect(getTree().index_list.reseted).not.toContain(id_3);
            });
    
            test('should trigger list index toggle for node', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;          
                act(() => actions.timeBatched.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).toContain(id_3)
                // Trigger toggle again
                act(() => actions.timeBatched.triggerListIndexToggle({
                    id: id_3,
                    name: 'selected'
                }));
                expect(getTree().index_list.selected).not.toContain(id_3);
            });
    
            test('should trigger index clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.timeBatched.triggerIndexClear({name: 'panel'}));
                expect(getTree().index.panel).toBeNull();
            });
        
            test('should trigger index list clear', () => {
                const hook = renderHook(() => useActions(), 
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.timeBatched.triggerListIndexClear({name: 'selected'}));
                expect(getTree().index_list.selected).toEqual([]);
            });

        });

    });

    describe('batch and history parts', () => {

        const onSlice = jest.fn();
        const getSlice = () => onSlice.mock.calls[onSlice.mock.calls.length - 1][0]

        afterEach(() => {
            onSlice.mockReset();
        });

        const wrapper = ({children, onSlice}) => (
            <Builder 
                initialTree = {initialTree}
                initialBatchTime = {1000}
                initialBatchTimeLimit = {1000} 
            >
                <TreeTestComponent onSlice = {onSlice} />
                {children}
            </Builder>
        );
        const initialProps = {onSlice: onSlice}

        describe('time batched triggers', () => {

            beforeAll(() => {
                jest.useFakeTimers();
            })
            
            afterEach(() => {
                jest.runOnlyPendingTimers();
            })
            
            afterAll(() => {
                jest.useRealTimers();
            })
            
            test('should time batch for time batched triggers', async () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.timeBatched.triggerDelete({id: id_3}));
                expect(getSlice().batch.patches.length).toBeGreaterThan(0);
                expect(getSlice().history.timeline.length).toBe(0);
                // Simulate time passing by
                // and batcher completed.
                jest.advanceTimersByTime(1000);
                // Wait for commit promise
                // to resolve.
                await act(async () => await Promise.resolve());
                expect(getSlice().batch.patches.length).toBe(0);
                expect(getSlice().history.timeline.length).toBe(1);
            });
    
        });
    
        describe('batched triggers', () => {
    
            test('should batch for batched triggers', () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.batched.triggerDelete({id: id_3}));
                expect(getSlice().batch.patches.length).toBeGreaterThan(0);
                expect(getSlice().history.timeline.length).toBe(0);
            })
    
        });
    
        describe('unbatched triggers', () => {
    
            test('should commit after trigger for unbatched triggers', () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unbatched.triggerDelete({id: id_3}));
                expect(getSlice().batch.patches.length).toBe(0);
                expect(getSlice().history.timeline.length).toBe(1);
            });
    
        });
    
        describe('unrecorded triggers', () => {
    
            test('should be ignored in Slice for unrecorded triggers', () => {
                const hook = renderHook(() => useActions(),
                {wrapper: wrapper, initialProps: initialProps});  
                const actions = hook.result.current;      
                act(() => actions.unrecorded.triggerDelete({id: id_3}));
                expect(getSlice().batch.patches.length).toBe(0);
                expect(getSlice().history.timeline.length).toBe(0);
            })
    
        });

    });

});
