import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const createMeta = tree.actions.createMeta;

describe('createMeta', () => {

    const id_1 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_meta({
            fixed: false,
            visible: true,
        })
    );

    const state = plainBranch(tree);

    describe('should throw errors', () => {

        test('should throw when not passing meta object', () => {
            const action = createMeta({
                meta: null
            });
            expect(() => reducer(state, action)).toThrow();
        });

    });

    describe('should set meta correctly', () => {

        const id = itemid();
        const id_other = itemid();

        const data = branch(
            item({
                __id__: id,
                type: 'TypeB'
            })
            .with_meta({
                fixed: false,
            })
        )
        .with_child(
            item({
                __id__: id_other,
                type: 'TypeB'
            })
        );
        const node = plainBranch(data);

        test('should set specified meta for node including id', () => {
            const action = createMeta({
                meta: node.meta,
            });
            const newState = reducer(state, action);
            expect(newState.meta[id]).toBeDefined();
            expect(newState.meta[id]).toEqual({
                id: id,
                fixed: false
            });
        });
    
        test('should set empty meta object for node if it is not specified', () => {
            const action = createMeta({
                meta: node.meta,
            });
            const newState = reducer(state, action);
            expect(newState.meta[id_other]).toBeDefined();
            expect(newState.meta[id_other]).toEqual({
                id: id_other
            });
        });

    });

});