import {useActions, useCollector} from "build-ui";
import {useEffect, useState} from "react";

const useExporter = () => {

    const [html, setHTML] = useState();
    const [css, setCSS] = useState();

    const actions = useActions();

    const selector = selectors => (
        selectors.selectRoot()
    );
    const collected = useCollector({
        selector: selector,
    });

    const rootID = (
        collected.node.id
    );
    const rootHTML = (
        collected.meta.html
    );
    const rootCSS = (
        collected.meta.css
    );

    const triggerMetaUpdate = (
        actions.unrecorded.triggerMetaUpdate
    );

    useEffect(() => {
        if (!rootHTML) return;
        setHTML(rootHTML);
        const meta = {
            html: undefined,
        }
        triggerMetaUpdate({
            id: rootID,
            meta: meta
        });
    });

    useEffect(() => {
        if (!rootCSS) return;
        setCSS(rootCSS);
        const meta = {
            css: undefined,
        }
        triggerMetaUpdate({
            id: rootID,
            meta: meta
        });
    });

    function handleExport() {
        const meta = {
            exporting: true
        };
        triggerMetaUpdate({
            id: rootID,
            meta: meta
        });
    }

    const exporterBag = {
        html: html,
        css: css,
    };

    const handlers = {
        handleExport
    }

    const bag = {
        ...exporterBag,
        ...handlers,
    }
    return bag;

};

export default useExporter;