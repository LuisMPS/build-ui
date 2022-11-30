import useToolDnD from "./dnd/useToolDnD";

const useTools = () => {
    const dnd = useToolDnD({
        transferType: 'builder',
    });
    return dnd;
} 

export default useTools;