import React from 'react';
import {Outlet} from 'react-router-dom';
const ErrorComponent = ()=> {
        return (
            <>
                <Outlet/>
            </>
        );
};

export default ErrorComponent;
