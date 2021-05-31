import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const updateMeta = tree.actions.updateMeta;

describe('updateMeta', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_meta({
            fixed: true,
            visible: true
        })
    )

    const state = plainBranch(tree);

    describe('should update node meta correctly', () => {
    
        test('should update node meta', () => {
            const action = updateMeta({
                id: id_1,
                meta: {fixed: false}
            });
            const newState = reducer(state, action);
            expect(newState.meta[id_1]).toEqual({
                id: id_1,
                visible: true,
                fixed: false,
            });
        });

    });

    test('should do nothing if meta is not provided', () => {
        const action = updateMeta({
            id: id_1,
        });
        const newState = reducer(state, action);
        expect(newState).toEqual(newState);
    });

});