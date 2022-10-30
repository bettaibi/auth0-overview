import React from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import config from '../config/auth0-config';

export default function Auth0ProviderWithHistory({children}: {children: React.ReactNode}){
    const domain = config.AUTH0_DOMAIN || '';
    const clientId = config.AUTH0_CLIENT_ID || '';
    const navigate = useNavigate();

    const onRedirectCallback = (appState: AppState | undefined) => {
        navigate(appState?.returnTo || window.location.pathname);
    }

    return (
        <Auth0Provider 
            domain={domain} 
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    )
}