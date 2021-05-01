import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const deleteMeta = tree.actions.deleteMeta;

describe('deleteMeta', () => {

    const id_1 = itemid();
    const id_2 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_meta({
            fixed: false,
            visible: true,
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

        test('should throw when node with id does not exist', () => {
            // Fake delete id
            const action = deleteMeta({id: itemid()});
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should delete meta correctly', () => {

        test('should delete meta for node with id and children', () => {
            const action = deleteMeta({id: id_1});
            const newState = reducer(state, action);
            expect(newState.meta[id_1]).toBeUndefined();
            expect(newState.meta[id_2]).toBeUndefined();
        });

        test('should delete all meta if passed id is root id', () => {
            const action = deleteMeta({id: id_1});
            const newState = reducer(state, action);
            expect(newState.meta).toEqual({});
        });
    
    });

});