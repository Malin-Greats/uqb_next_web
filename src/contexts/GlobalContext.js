import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobal = () => {
    return useContext(GlobalContext);
};

export const GlobalProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const cartItemsCount = cartItems.length;

    const value = {
        cartItemsCount,
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};