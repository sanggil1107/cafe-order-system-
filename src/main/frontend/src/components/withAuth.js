import React from 'react';


function withAuth(Component) {
    function WrappedComponent(props) {
        const token = localStorage.getItem('token');

        if (token == null) {
            return '로그인';
        }
        return <Component {...props} token={token} />;
    }

    WrappedComponent.displayName = `withAuth(${Component.name})`;

    return WrappedComponent;
}

export default withAuth;