import useToolDnD from "./dnd/useToolDnD";

const useTools = () => {
    const dnd = useToolDnD({
        initialTransferType: 
        'builder',
    });
    const {
        transferType,
        setTransferType,
        ...bag
    } = dnd;
    return bag;
} 

export default useTools;