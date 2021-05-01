import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const addIndex = tree.actions.addIndex;

describe('addIndex', () => {

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
        .with_index('panel')
    )

    const state = plainBranch(tree);

    describe('should add index correctly', () => {
    
        test('should add id index', () => {
            const action = addIndex({
                id: id_1,
                name: 'panel'
            });
            const newState = reducer(state, action);
            expect(newState.index.panel).toBe(id_1);
        });

    });

});