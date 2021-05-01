import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const clearListIndex = tree.actions.clearListIndex;

describe('clearListIndex', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_index_list(
            'selected'
        )
    );

    const state = plainBranch(tree);

    describe('should clear index list correctly', () => {
    
        test('should clear named index list', () => {
            const action = clearListIndex({
                name: 'selected'
            });
            const newState = reducer(state, action);
            expect(newState.index_list.selected).toEqual([]);
        });

    });

});