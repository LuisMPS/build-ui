import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const intershiftNode = tree.actions.intershiftNode;

describe('intershiftNode', () => {

    const id_1 = itemid();
    const id_2 = itemid();
    const id_3 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
    )
    .with_child(
        item({
            __id__: id_2,
            type: 'TypeA',
        })
    )
    .with_child(
        item({
            __id__: id_3,
            type: 'TypeA',
        })
    );

    const state = plainBranch(tree);

    describe('should throw errors', () => {

        test('should throw when id does not exist in tree', () => {
            const action = intershiftNode({id: itemid()});
            expect(() => reducer(state, action)).toThrow();
        });

        test('should throw when node does not have a parent (is root)', () => {
            const action = intershiftNode({id: id_1});
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should shift node correctly', () => {

        test('should keep parent node after shift', () => {
            const action = intershiftNode({
                id: id_2,
                absolute: 1,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_2].parentId).toBe(id_1);
        });
    
        test('should shift with relative position', () => {
            const action = intershiftNode({
                id: id_3,
                relative: -1
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[0]).toBe(id_3);
            expect(newState.byIds[id_1].childIds[1]).toBe(id_2);
        });
    
        test('should shift with absolute position', () => {
            const action = intershiftNode({
                id: id_3,
                absolute: 0
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[0]).toBe(id_3);
            expect(newState.byIds[id_1].childIds[1]).toBe(id_2);
        });

        test('should give shift priority to absolute if relative is also defined', () => {
            const action = intershiftNode({
                id: id_2,
                absolute: 1,
                relative: 0,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[1]).toBe(id_2);
            expect(newState.byIds[id_1].childIds[0]).toBe(id_3);
        });

        test('should shift to last if neither absolute nor relative are defined', () => {
            const action = intershiftNode({
                id: id_2,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[1]).toBe(id_2);
            expect(newState.byIds[id_1].childIds[0]).toBe(id_3);
        });

    });

});