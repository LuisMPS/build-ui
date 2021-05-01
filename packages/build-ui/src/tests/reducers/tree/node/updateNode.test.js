import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const updateNode = tree.actions.updateNode;

describe('updateNode', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
            props: {text: 'Test'}
        })
    )

    const state = plainBranch(tree);

    describe('should throw errors', () => {

        test('should throw when id does not exist in tree', () => {
            // Update fake node
            const action = updateNode({
                id: itemid(),
                props: {text: 'Error'}
            });
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should update node correctly', () => {
    
        test('should update node props', () => {
            const action = updateNode({
                id: id_1,
                props: {text: 'Hello', color: 'red'}
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].props).toEqual({
                text: 'Hello', 
                color: 'red'
            });
        });

    });

    test('should do nothing if props are not provided', () => {
        const action = updateNode({
            id: id_1,
        });
        const newState = reducer(state, action);
        expect(newState).toEqual(newState);
    });

});