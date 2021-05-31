import React from 'react';
import Anchor from './Anchor';
import useStyle from './style/ResizeAnchors';

const ResizeAnchors = props => {
    const classes = useStyle();
    return <React.Fragment>
        <Anchor
            {...props}
            expandsDown = {false} 
            expandsRight = {false}
            className = {classes.anchor_1}
        />
        <Anchor 
            {...props}
            expandsDown = {false} 
            className = {classes.anchor_2}
        />
        <Anchor 
            {...props}
            expandsDown = {false} 
            expandsRight = {true}
            className = {classes.anchor_3}
        />
        <Anchor 
            {...props}
            expandsRight = {true} 
            className = {classes.anchor_4}
        />
        <Anchor 
            {...props}
            expandsDown = {true}
            expandsRight = {true} 
            className = {classes.anchor_5}
        />
        <Anchor 
            {...props}
            expandsDown = {true} 
            className = {classes.anchor_6}
        />
        <Anchor 
            {...props}
            expandsDown = {true} 
            expandsRight = {false}
            className = {classes.anchor_7}
        />
        <Anchor 
            {...props}
            expandsRight = {false} 
            className = {classes.anchor_8}
        />
    </React.Fragment>
}

export default ResizeAnchors;