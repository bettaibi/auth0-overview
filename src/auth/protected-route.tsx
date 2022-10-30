import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface Props{
    component: React.ComponentType<object>;
}

export default function ProtectedRoute({component: Component, ...rest}: Props) {
    const Element = withAuthenticationRequired(Component, {
        onRedirecting: () => <span>Auth0 Loading...</span>
    });

    return (
       <Element  {...rest}/> 
    )
}
