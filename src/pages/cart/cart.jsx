import React, { useContext } from "react";
import {BOOKS} from "../../books";
import { StoreContext } from "../../context/store-context"
import {CartItem} from "./cart-item"

export const Cart = () => {
    const { cartItems } = useContext(StoreContext);
    return (
        <div className="cart">
            <div className="cartItems">
                { BOOKS.map( (item)=> {
                    if (cartItems[item.id]!==0)
                    {
                        return <CartItem data={item}/>
                    }
                })}
            </div>
        </div>
    )
};