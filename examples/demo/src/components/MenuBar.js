import {useState, useEffect, useRef} from "react";
import {useBuilder} from "build-ui";
import {unstable_batchedUpdates as batch} from "react-dom";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import useExporter from "../hooks/useExporter";
import useStyle from "./style/MenuBar";

const MenuBar = ({
    className,
    ...props
}) => {
    const builder = useBuilder();
    const exporter = useExporter();

    const saver = useRef();
    const exporterHTML = useRef();
    const exporterCSS = useRef();

    const [saving, setSaving] = useState(false);
    const [exporting, setExporting] = useState(false);

    const [saveLink, setSaveLink] = useState(null);
    const [htmlLink, setHTMLLink] = useState(null);
    const [cssLink, setCSSLink] = useState(null);

    const [file, setFile] = useState(null);

    // console.log(builder.history);
    const {
        handleRedo,
        handleUndo,
        json,
        loadTree,
        canRedo,
        canUndo,
    } = builder;

    const handleSave = () => {
        // console.log(json());
        const content = JSON.stringify(json());
        const file = new Blob([content], {type: 'application/json'});
        const link = URL.createObjectURL(file);
        setSaveLink(link);
        setSaving(true);
    }

    const handleLoad = event => {
        const file = event.target.files[0];
        // Must manage with effect
        // since reading file
        // will be done async.
        setFile(file);        
    }

    const handleExport = () => {
        exporter.handleExport();
        setExporting(true);
    }

    useEffect(() => {
        if (!saving) return;
        saver.current.click();
        URL.revokeObjectURL(saveLink);
        setLink(null);
        setSaving(false);
    }, [saving, saveLink]);

    useEffect(() => {
        if (!file) return;
        const content = file.text();
        content.then(text => JSON.parse(text))
        .then(tree => batch(() => {
            loadTree(tree);
            setFile(null);
        })).catch();
    });

    const css = exporter.css;
    const html = exporter.html;
    useEffect(() => {
        if (!exporting) return;
        if (css) {
            const file = new Blob([css], {type: 'text/css'});
            const link = URL.createObjectURL(file);
            setCSSLink(link);
            setExporting(false);
        }
        if (html) {
            const formatHTML = html => (
                '<html>' +
                '<head></head>' +
                '<body>' + html + '</body>' +
                '</html>'
            );
            const formattedHTML = formatHTML(html);
            const file = new Blob([formattedHTML], {type: 'text/html'});
            const link = URL.createObjectURL(file);
            setHTMLLink(link);
            setExporting(false);
        }
    }, [
        html, 
        css, 
        exporting,
    ]);

    useEffect(() => {
        if (!htmlLink) return;
        exporterHTML.current.click();
        URL.revokeObjectURL(htmlLink);
        setHTMLLink(null);
    }, [htmlLink]);

    useEffect(() => {
        if (!cssLink) return;
        exporterCSS.current.click();
        URL.revokeObjectURL(cssLink);
        setCSSLink(null);
    }, [cssLink]);


    const classes = useStyle();
    const classAll = clsx(
        className,
        classes.menu
    );
    return <div 
        {...props}
        className = {classAll}
    >

        <Button
            color = 'primary'
            variant = 'outlined'
            className = {clsx(classes.action, classes.button)}
            onClick = {handleRedo}
            disabled = {!canRedo}
        >
            Redo
        </Button>

        <Button
            color = 'primary'
            variant = 'outlined'
            className = {clsx(classes.action, classes.button)}
            onClick = {handleUndo}
            disabled = {!canUndo}
        >
            Undo
        </Button>

        <Button 
            color = 'primary'
            variant = 'outlined'
            onClick = {handleSave}
            className = {clsx(classes.action, classes.button)}
        >
            Save 
        </Button>
        <a
            hidden = {true}
            download = {true}
            href = {saveLink}
            ref = {saver}
        />

        <Button 
            type = 'file'
            component = 'label'
            color = 'primary'
            variant = 'outlined'
            className = {clsx(classes.action, classes.button)}
        >
            Load
            <input
                hidden = {true}
                type = 'file'
                name = 'load_tree'
                onChange = {handleLoad}
            />
        </Button>

        <Button 
            color = 'primary'
            variant = 'outlined'
            onClick = {handleExport}
            className = {clsx(classes.action, classes.button)}
        >
            Export
        </Button>
        <a
            hidden = {true}
            download = {true}
            href = {htmlLink}
            ref = {exporterHTML}
        />
        <a
            hidden = {true}
            download = {true}
            href = {cssLink}
            ref = {exporterCSS}
        />

    </div>
}

export default MenuBar;