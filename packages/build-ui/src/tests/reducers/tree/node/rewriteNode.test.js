import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const rewriteNode = tree.actions.rewriteNode;

describe('rewriteNode', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
            props: {color: 'red'}
        })
    );

    const state = plainBranch(tree);

    describe('should throw errors', () => {

        test('should throw when id does not exist in tree', () => {
            // Rewrite fake node
            const action = rewriteNode({
                id: itemid(),
                props: {color: 'white'}
            });
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should rewrite node correctly', () => {
    
        test('should rewrite node props', () => {
            const action = rewriteNode({
                id: id_1,
                props: {backgroundColor: 'blue'}
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].props).toEqual({backgroundColor: 'blue'});
        });

    });

    test('should do nothing if props are not provided', () => {
        const action = rewriteNode({
            id: id_1,
        });
        const newState = reducer(state, action);
        expect(newState).toEqual(newState);
    });

});