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
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        setTotalCount(totalCount - 1);
    };

    const updateCartItemCount = (newAmount, itemId) => {
        if (newAmount > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
            setTotalCount(getTotalCount());
        }
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = BOOKS.find((book) => book.id === Number(item));
                total += cartItems[item] * itemInfo.price;
            }
        }
        return total;
    }
    const getTotalCount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                total += cartItems[item];
            }
        }
        return total;
    }
    const contextValue = { cartItems, totalCount, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getTotalCount };
    return <StoreContext.Provider value={contextValue}>{props.children}
    </StoreContext.Provider>
}