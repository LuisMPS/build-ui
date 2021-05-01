import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const addListIndex = tree.actions.addListIndex;

describe('addListIndex', () => {

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
            type: 'TypeA'
        })
        .with_index_list(
            'selected'
        )
    )

    const state = plainBranch(tree);

    describe('should add index list correctly', () => {
    
        test('should add id to index list if it exists', () => {
            const action = addListIndex({
                id: id_1,
                name: 'selected'
            });
            const newState = reducer(state, action);
            expect(newState.index_list.selected).toContain(id_1);
        });

        test('should add id to index list if it does not exist', () => {
            const action = addListIndex({
                id: id_2,
                name: 'updated'
            });
            const newState = reducer(state, action);
            expect(newState.index_list.updated.length).toBe(1);
            expect(newState.index_list.updated).toContain(id_2);
        });

    });

});