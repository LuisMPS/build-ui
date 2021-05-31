import {useState, useEffect, useRef} from "react";
import {useBuilder} from "build-ui";
import {unstable_batchedUpdates as batch} from "react-dom";
import useStyle from "./style/MenuBar";
import clsx from "clsx";
import { Button } from "@material-ui/core";

const MenuBar = ({
    className,
    ...props
}) => {
    const builder = useBuilder();
    const [save, setSave] = useState(false);
    const [link, setLink] = useState(null);
    const [file, setFile] = useState(null);
    // console.log(builder.history)
    const {
        handleRedo,
        handleUndo,
        json,
        loadTree,
        canRedo,
        canUndo,
    } = builder;
    const handleSave = () => {
        console.log(json());
        const content = JSON.stringify(json());
        const file = new Blob([content], {type: 'application/json'});
        const link = URL.createObjectURL(file);
        setLink(link);
        setSave(true);
    }
    const handleLoad = event => {
        const file = event.target.files[0];
        // Must manage with effect
        // since reading file
        // will be done async.
        setFile(file);        
    }
    useEffect(() => {
        if (!save) return;
        download.current.click();
        URL.revokeObjectURL(link);
        setLink(null);
        setSave(false);
    }, [save, link]);
    useEffect(() => {
        if (!file) return;
        const content = file.text();
        content.then(text => JSON.parse(text))
        .then(tree => batch(() => {
            loadTree(tree);
            setFile(null);
        })).catch();
    });
    const download = useRef();
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
            <a
                hidden = {true}
                download = {true}
                href = {link}
                ref = {download}
            />
            Save 
        </Button>

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

    </div>
}

export default MenuBar;