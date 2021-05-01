import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const deleteIndex = tree.actions.deleteIndex;

describe('deleteIndex', () => {

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
        .with_index(
            'topmost'
        )
    )
    .with_child(
        item({
            __id__: id_2,
            type: 'TypeA'
        })
        .with_index(
            'panel'
        )
    )

    const state = plainBranch(tree);

    describe('should delete index correctly', () => {
    
        test('should delete index for id and children', () => {
            const action = deleteIndex({
                id: id_1,
            });
            const newState = reducer(state, action);
            expect(newState.index.panel).toBeNull();
            expect(newState.index_list.selected).toEqual([]);
        });

        test('should delete index for id only', () => {
            const action = deleteIndex({
                id: id_2,
            });
            const newState = reducer(state, action);
            expect(newState.index.topmost).toBeDefined();
            expect(newState.index.panel).toBeNull();
        });

    });

});