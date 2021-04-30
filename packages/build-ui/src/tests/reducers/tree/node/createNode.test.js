import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const createNode = tree.actions.createNode;

describe('createNode', () => {

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
            type: 'TypeA',
        })
    );

    const state = plainBranch(tree);

    describe('should throw errors', () => {

        test('should throw when not passing a valid node in payload', () => {
            const action = createNode({
                targetId: id_1,
                node: {},
            });
            expect(() => reducer(state, action)).toThrow();
        });

        test('should throw when not passing any in payload', () => {
            const action = createNode({
                targetId: id_1,
            });
            expect(() => reducer(state, action)).toThrow();
        });

        test('should throw when not passing targetId in payload', () => {
            const node = plainBranch(branch());
            const action = createNode({
                node: node,
            });
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should create node correctly', () => {

        const id = itemid();

        const data = branch(
            item({
                __id__: id,
                type: 'TypeB'
            })
        );
        const node = plainBranch(data);

        test('should add node to byIds object', () => {
            const action = createNode({
                targetId: id_1,
                node: node,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id]).toBeDefined();
            expect(newState.byIds[id].type).toBe('TypeB');
        });
    
        test('should establish parent-child relationships', () => {
            const action = createNode({
                targetId: id_1,
                node: node,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id].parentId).toBe(id_1);
            expect(newState.byIds[id_1].childIds).toContain(id);
        });
    
        test('should insert at last position if not specified', () => {
            const action = createNode({
                targetId: id_1,
                node: node,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[1]).toBe(id);
        });
    
        test('should insert at specified position', () => {
            const action = createNode({
                targetId: id_1,
                node: node,
                position: 0,
            });
            const newState = reducer(state, action);
            expect(newState.byIds[id_1].childIds[0]).toBe(id);
        });

    });

});