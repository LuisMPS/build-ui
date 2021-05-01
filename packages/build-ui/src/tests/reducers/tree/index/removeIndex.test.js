import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const removeIndex = tree.actions.removeIndex;

describe('removeIndex', () => {

    const id_1 = itemid();
    const id_2 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_index(
            'panel'
        )
    )
    .with_child(
        item({
            __id__: id_2,
            type: 'TypeA',
        })
    );

    const state = plainBranch(tree);

    describe('should remove index correctly', () => {
    
        test('should remove index if id matches', () => {
            const action = removeIndex({
                name: 'panel',
                id: id_1,
            });
            const newState = reducer(state, action);
            expect(newState.index.panel).toBeNull();
        });

    });

    test('should not remove index if id does not match', () => {
        const action = removeIndex({
            name: 'panel',
            id: id_2,
        });
        const newState = reducer(state, action);
        expect(newState.index.panel).toBe(id_1);
    });

    test('should do nothing if index does not exist', () => {
        const action = removeIndex({
            name: 'fake',
            id: id_1,
        });
        const newState = reducer(state, action);
        expect(newState).toEqual(state);
    });

});