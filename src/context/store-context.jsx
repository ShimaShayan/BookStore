import React, { createContext, useState } from "react";
import { BOOKS } from "../books"

export const StoreContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < BOOKS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [totalCount, setTotalCount] = useState(0);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setTotalCount(totalCount + 1);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId - 1] }));
        setTotalCount(totalCount - 1);
    }

    const contextValue = { cartItems,totalCount, addToCart, removeFromCart };
    console.log(cartItems);
    return <StoreContext.Provider value={contextValue}>{props.children}
    </StoreContext.Provider>
}