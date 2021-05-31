import React from 'react';
import MUIGrid from '@material-ui/core/Grid'
import useStyle from './style/Grid';
import clsx from 'clsx';
import {isInteger} from '../../../../utils/number';

const Grid = React.forwardRef(({
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classAll = clsx(
        className,
        classes.grid,
        classes.ui,
    );
    const isItemSize = size => (
        props.item &&
        isInteger(size) &&
        size > 0 &&
        size < 12
    );
    return <MUIGrid
        className = {classAll}
        ref = {ref}
        xs = {isItemSize(xs) ? xs : undefined}
        sm = {isItemSize(sm) ? sm : undefined}
        md = {isItemSize(md) ? md : undefined}
        lg = {isItemSize(lg) ? lg : undefined}
        xl = {isItemSize(xl) ? xl : undefined}
        {...props}
    />
});

export default Grid;