import React, { useState } from 'react';


function withAuth(Component) {
    function WrappedComponent(props) {
        const token_data = localStorage.getItem('token');
        // const [token, setToken] = useState(false);

        // if (token_data == null) {
        //     setToken(false);
        // }
        // else {
        //     setToken(true);
        // }
        return <Component {...props} token={token_data} />;
    }

    WrappedComponent.displayName = `withAuth(${Component.name})`;

    return WrappedComponent;
}

export default withAuth;