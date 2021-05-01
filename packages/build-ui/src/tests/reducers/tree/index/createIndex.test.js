import tree from '../../../../slices/tree';
import {plainBranch, branch, item, itemid} from '../../../../utils/tree';

const reducer = tree.reducer;
const createIndex = tree.actions.createIndex;

describe('createIndex', () => {

    const id_1 = itemid();
    const id_2 = itemid();

    const tree = branch(
        item({
            __id__: id_1,
            type: 'TypeA',
        })
        .with_index(
            'panel'
        )
    )
    .with_child(
        item({
            __id__: id_2,
            type: 'TypeA'
        })
        .with_index_list(
            'selected'
        )
    )

    const state = plainBranch(tree);

    describe('should create index from node', () => {
    
        test('should update from received index', () => {
            const id = itemid();
            const node = plainBranch(branch(
                item({
                    __id__: id,
                    type: 'TypeB'
                })
                .with_index(
                    'panel'
                )
            ));
            const action = createIndex({
                index: node.index,
                index_list: node.index_list
            });
            const newState = reducer(state, action);
            expect(newState.index.panel).toBe(id);
        });

        test('should update from received index list', () => {
            const id = itemid();
            const node = plainBranch(branch(
                item({
                    __id__: id,
                    type: 'TypeB'
                })
                .with_index_list(
                    'selected'
                )
            ));
            const action = createIndex({
                index: node.index,
                index_list: node.index_list
            });
            const newState = reducer(state, action);
            expect(newState.index_list.selected.length).toBe(2);
            expect(newState.index_list.selected).toContain(id);
        });

        test('should create received index list', () => {
            const id = itemid();
            const node = plainBranch(branch(
                item({
                    __id__: id,
                    type: 'TypeB'
                })
                .with_index_list(
                    'created'
                )
            ));
            const action = createIndex({
                index: node.index,
                index_list: node.index_list
            });
            const newState = reducer(state, action);
            expect(newState.index_list.created.length).toBe(1);
            expect(newState.index_list.created).toContain(id);
        });

    });

});