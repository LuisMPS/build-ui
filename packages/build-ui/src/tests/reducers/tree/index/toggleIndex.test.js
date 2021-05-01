import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const toggleIndex = tree.actions.toggleIndex;

describe('toggleIndex', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
    );

    const state = plainBranch(tree);

    describe('should toggle index correctly', () => {
    
        test('should toggle index given id', () => {
            const action = toggleIndex({
                id: id_1,
                name: 'panel'
            });
            const newState = reducer(state, action);
            expect(newState.index.panel).toBe(id_1);
            const newerState = reducer(newState, action);
            expect(newerState.index.panel).toBeNull();
        });

    });

});