import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const { children } = props;
    const [userData, setUserData] = useState(null);
    return (
        <AppContext.Provider
            value={{ userData, setUserData }} >
            {children}
        </AppContext.Provider>
    )
}