import React from 'react';
import ViewContext from '../context/ViewContext';

const ViewProvider = ({
    view,
    children,
}) => {
    return <ViewContext.Provider value = {view}>
        {children}
    </ViewContext.Provider>
}

export default ViewProvider;