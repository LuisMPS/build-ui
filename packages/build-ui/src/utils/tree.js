import {nanoid} from "@reduxjs/toolkit";
import {keys} from "./object";

class Branch {
    constructor(root, children = []) {
        // Root should always be node
        // Cannot be another branch.
        this.root = root;
        this.children = children;
    }
    with_child(child) {
        const children = [
            ...this.children, 
            child
        ]
        return new Branch(
            this.root, 
            children
        );
    }
}

class Item {
    constructor(detail, meta, indexes, indexes_list) {
        this.detail = detail;
        this.meta = meta || {};
        this.indexes = indexes || [];
        this.indexes_list = indexes_list || [];
    }
    with_meta(meta) {
        return new Item(
            this.detail, 
            meta,
            this.indexes,
            this.indexes_list,
        );
    }   
    with_index(...indexes) {
        return new Item(
            this.detail,
            this.meta,
            [...this.indexes, ...indexes],
            this.indexes_list,
        );
    }
    with_index_list(...indexes) {
        return new Item(
            this.detail,
            this.meta,
            this.indexes,
            [...this.indexes_list, ...indexes],
        );
    }
}

export function isBranch(branch) {
    return branch instanceof Branch;
}

// Proxy API function
export function branch(root) {
    return new Branch(root);
}


export function isItem(item) {
    return item instanceof Item;
}

// Proxy API function
export function item(detail) {
    return new Item(detail);
}

export function normalizeBranch(branch) {

    function mergeRootToBranch(branch, rootToMerge) {
        branch.root = rootToMerge.id;
        // Merge
        return mergeItemToBranch(branch, rootToMerge);
    }

    function mergeNodeToBranch(branch, nodeToMerge) {
        // Establish parent-child relations
        nodeToMerge.node.parentId = branch.root;
        branch.byIds[branch.root].childIds.push(nodeToMerge.id);
        // Merge
        return mergeItemToBranch(branch, nodeToMerge);
    }

    function mergeItemToBranch(branch, itemToMerge) {
        // Merge
        branch.byIds[itemToMerge.id] = itemToMerge.node;
        branch.meta[itemToMerge.id] = itemToMerge.meta;
        itemToMerge.index.forEach(index => {
            branch.index[index] = itemToMerge.id;
        });
        itemToMerge.index_list.forEach(index => {
            let index_list = branch.index_list[index] || [];
            branch.index_list[index] = [
                ...index_list,
                itemToMerge.id
            ];
        });
        return branch;
    }
    
    function mergeBranchToBranch(branch, branchToMerge) {
        // Establish parent-child relations
        branchToMerge.byIds[branchToMerge.root].parentId = branch.root;
        branch.byIds[branch.root].childIds.push(branchToMerge.root);
        // Merge
        keys(branchToMerge.byIds).forEach(id => {
            branch.byIds[id] = branchToMerge.byIds[id];
        });
        keys(branchToMerge.meta).forEach(id => {
            branch.meta[id] = branchToMerge.meta[id];
        });
        keys(branchToMerge.index).forEach(index => {
            branch.index[index] = branchToMerge.index[index];
        });
        keys(branchToMerge.index_list).forEach(index => {
            let index_list = branch.index_list[index] || [];
            branch.index_list[index] = [
                ...index_list, 
                ...branchToMerge.index_list[index]
            ];
        });
        return branch;
    }

    const treeInitial = ({
        root: null,
        byIds: {},
        meta: {},
        index: {},
        index_list: {},
    });

    if (!branch.root) return treeInitial;

    const root = normalizeItem(branch.root);
    const treeWithRoot = mergeRootToBranch(treeInitial, root);

    const nodes = branch.children.filter(isItem);
    const treeWithNodes = nodes.reduce((tree, node) => {
        const normal_node = normalizeItem(node);
        return mergeNodeToBranch(tree, normal_node);
    }, treeWithRoot);

    const branches = branch.children.filter(isBranch);
    const treeWithBranches = branches.reduce((tree, branch) => {
        const normal_branch = normalizeBranch(branch);
        return mergeBranchToBranch(tree, normal_branch);
    }, treeWithNodes);

    return treeWithBranches;
}

export function normalizeItem(item) {
    const auto_id = nanoid();
    const forced_id = item.detail.__id__;
    const id = forced_id || auto_id;
    const node = {
        id: id,
        type: item.detail.type || null,
        props: item.detail.props || {},
        childIds: item.detail.childIds || [],
        parentId: item.detail.parentId || null,
    };
    const meta = {
        id: id,
        ...item.meta,
    };
    const index = (
        item.indexes
    );
    const index_list = (
        item.indexes_list
    );
    return {
        id: id,
        node: node,
        meta: meta,
        index: index,
        index_list: index_list,
    }
}

export function plainBranch(branch) {
    return isBranch(branch) ? normalizeBranch(branch) : branch
}

export {nanoid as itemid};