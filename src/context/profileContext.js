import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);

    const value = {
        loading, 
        setLoading
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}