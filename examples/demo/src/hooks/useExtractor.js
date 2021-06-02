import {useActions, useCollector} from 'build-ui';
import {useEffect} from 'react';

const useExtractor = (
    id,
    root
) => {

    const actions = useActions();

    const selector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: selector
    });

    const exporting = (
        collected.meta.exporting ||
        false
    );

    const triggerMetaUpdate = (
        actions.unrecorded.triggerMetaUpdate
    );

    useEffect(() => {
        const htmlRoot = root.current;
        if (!exporting || !htmlRoot) return;
        // Extract HTML
        const html = htmlRoot.outerHTML;
        // Extract CSS
        const cssNodes = [
            htmlRoot, 
            ...htmlRoot.getElementsByTagName('*')
        ];
        // Code below uses CSSOM API.
        function shouldIncludeCSSRule(cssRule) {
            // If htmlRoot or child node
            // is targeted by CSS Selector.
            if (cssRule.selectorText) {
                const selectorText = cssRule.selectorText;
                // Remove pseudo-selectors.
                const selector = selectorText.replace(/:(\S)+/, '');
                const match = cssNodes.some(node => {
                    try {
                        return node.matches(selector);
                    }
                    catch (e) {
                        return false;
                    }
                });
                return match;
            }
            // If rule is a grouping CSSRule
            // like @media or @supports
            if (cssRule.cssRules) {
                const cssSubrules = cssRule.cssRules;
                return [...cssSubrules].some(shouldIncludeCSSRule)
            }
            // In case rule cannot be adressed
            // easily, better include than leave 
            // off. (Targeted to other @ rules, 
            // like @font-face, @keyframes, etc...)
            // This can cause some unused CSS to be
            // exported but will not export incomplete
            // styles. Can it be optimized?
            else {
                return true;
            }
        }
        const css = [...document.styleSheets].map(sheet => {
            try {
                const cssRules = sheet.cssRules;
                const rules = [...cssRules].map(cssRule => {
                    if (shouldIncludeCSSRule(cssRule)) {
                        return cssRule.cssText;
                    }
                    else return '';
                })
                // Join all included rules for 
                return rules.join('');
            }
            // Inaccesible stylesheet. Most
            // likely an external sheet in another
            // domain.
            catch (e) { }
        })
        // Join all included rules from 
        // every stylesheet.
        .filter(Boolean)
        .join('');
        // console.log(css);
        const meta = {
            exporting: false,
            html: html,
            css: css,
        };
        triggerMetaUpdate({
            id: id,
            meta: meta,
        });
    });

}

export default useExtractor;