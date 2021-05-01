import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const removeListIndex = tree.actions.removeListIndex;

describe('removeListIndex', () => {

    const id_1 = itemid();
    const id_2 = itemid();

    const tree = branch(
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
    );

    const state = plainBranch(tree);

    describe('should remove index from list correctly', () => {
    
        test('should remove index if index list contains id', () => {
            const action = removeListIndex({
                name: 'selected',
                id: id_1,
            });
            const newState = reducer(state, action);
            expect(newState.index_list.selected).toEqual([]);
        });

    });

    test('should not remove index if index list does not contain id', () => {
        const action = removeListIndex({
            name: 'selected',
            id: id_2,
        });
        const newState = reducer(state, action);
        expect(newState.index_list.selected).toContain(id_1);
    });

    test('should do nothing if index does not exist', () => {
        const action = removeListIndex({
            name: 'fake',
            id: id_1,
        });
        const newState = reducer(state, action);
        expect(newState).toEqual(state);
    });

});