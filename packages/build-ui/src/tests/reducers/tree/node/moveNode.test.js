import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const moveNode = tree.actions.moveNode;

describe('moveNode', () => {

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
            // Move fake node
            const action = moveNode({
                id: itemid(),
                targetId: id_1
            });
            expect(() => reducer(state, action)).toThrow();
        });

        test('should throw when target does not exist in tree', () => {
            // Move to target fake node
            const action = moveNode({
                id: id_1,
                targetId: itemid(),
            });
            expect(() => reducer(state, action)).toThrow();
        });

        test('should throw when node does not have a parent (is root)', () => {
            // Move to target fake node
            const action = moveNode({
                id: id_1,
                targetId: id_2,
            });
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should move node correctly', () => {

        test('should establish parent child relationships', () => {
            const action = moveNode({
                id: id_2,
                targetId: id_3,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_2].parentId).toBe(id_3);
            expect(newState.byIds[id_3].childIds).toContain(id_2);
        });
    
        test('should insert at last position if not specified', () => {
            const action = moveNode({
                id: id_2,
                targetId: id_1,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[1]).toBe(id_2);
            expect(newState.byIds[id_1].childIds[0]).toBe(id_3);
        });
    
        test('should insert at specified position', () => {
            const action = moveNode({
                id: id_3,
                targetId: id_1,
                position: 0
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[0]).toBe(id_3);
            expect(newState.byIds[id_1].childIds[1]).toBe(id_2);
        });

        test('should remove from old parent node if target is different', () => {
            const action = moveNode({
                id: id_2,
                targetId: id_3
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds).not.toContain(id_2);
            expect(newState.byIds[id_2].parentId).not.toBe(id_1);
        });

    });

});