import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const deleteNode = tree.actions.deleteNode;

describe('deleteNode', () => {

    const id_1 = itemid();
    const id_2 = itemid();

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
    );

    const state = plainBranch(tree);

    describe('should throw errors', () => {

        test('should throw when id does not exist in tree', () => {
            const action = deleteNode({id: itemid()});
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should delete node correctly', () => {

        test('should delete node and children from byIds', () => {
            const action = deleteNode({id: id_1});
            const newState = reducer(state, action);
            expect(newState.byIds[id_1]).toBeUndefined();
            expect(newState.byIds[id_2]).toBeUndefined();
        });
    
        test('should delete entire tree if passed id is root id', () => {
            const action = deleteNode({id: id_1});
            const newState = reducer(state, action);
            expect(newState.root).toBeNull();
            expect(newState.byIds).toMatchObject({});
        });
    
        test('should delete parent child relationships', () => {
            const action = deleteNode({id: id_2});
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds).not.toContain(id_2);
        });

    });

});