import {useEffect} from "react";
import {useActions, useMultiCollector} from "build-ui";

const BuilderSelector = () => {
    const actions = useActions();
    const triggerListIndexClear = (
        actions.unrecorded.triggerListIndexClear
    );
    const selector = selectors => (
        selectors.selectMultipleByIndex('selected')
    );
    const collected = useMultiCollector({
        selector: selector,
    });
    const hasSelected = (
        collected.listNodes().length > 0
    );
    useEffect(() => {
        if (!hasSelected) return;
        const handleDeselect = () => {
            triggerListIndexClear({
                name: 'selected'
            });
        }
        document.addEventListener(
            'click',
            handleDeselect
        );
        return () => {
            document.removeEventListener(
                'click',
                handleDeselect
            );
        }
    }, [
        hasSelected,
        triggerListIndexClear,
    ]);
    return null;
}

export default BuilderSelector;