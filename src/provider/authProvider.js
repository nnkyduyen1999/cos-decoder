import React, {createContext, useState} from 'react';

const AuthenticationContext = createContext();

const AuthenticationProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthenticationContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
