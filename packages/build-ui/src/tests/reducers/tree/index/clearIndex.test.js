import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const clearIndex = tree.actions.clearIndex;

describe('clearIndex', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_index(
            'panel'
        )
    );

    const state = plainBranch(tree);

    describe('should clear index correctly', () => {
    
        test('should clear named index', () => {
            const action = clearIndex({
                name: 'panel'
            });
            const newState = reducer(state, action);
            expect(newState.index.panel).toBeNull();
        });

    });

});