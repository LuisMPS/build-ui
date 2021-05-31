import React, {forwardRef} from 'react';
import DnDBuilder from '../components/DnDBuilder';

const DnDBuilderHOC = Component => forwardRef((props, ref) => {
    return <DnDBuilder
        ref = {ref}
        as = {Component}
        {...props}
    />
});


export default DnDBuilderHOC;