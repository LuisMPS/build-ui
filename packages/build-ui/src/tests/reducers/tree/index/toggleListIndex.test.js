import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const toggleListIndex = tree.actions.toggleListIndex;

describe('toggleListIndex', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
    );

    const state = plainBranch(tree);

    describe('should toggle index list correctly', () => {
    
        test('should toggle index list given id', () => {
            const action = toggleListIndex({
                id: id_1,
                name: 'selected'
            });
            const newState = reducer(state, action);
            expect(newState.index_list.selected).toContain(id_1);
            const newerState = reducer(newState, action);
            expect(newerState.index_list.selected).not.toContain(id_1);
        });

    });

});