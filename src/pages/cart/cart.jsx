import React, { useContext } from "react";
import { BOOKS } from "../../books";
import { StoreContext } from "../../context/store-context"
import { CartItem } from "./cart-item"
import { Navigate, useNavigate } from "react-router-dom";

export const Cart = () => {
    const { cartItems, getTotalCartAmount, getTotalCount } = useContext(StoreContext);
    const totalAmount = getTotalCartAmount();
    const totalCount = getTotalCount();
    const navigate = useNavigate();
    return (
        <div className="cart" >
            {BOOKS.map((item) => {
                if (cartItems[item.id] !== 0) {
                    return <CartItem data={item} />
                }
            })}
            <div className="footer">
                {totalCount > 0 ?
                    <div className="total">
                        <p>Total Items : <b>{totalCount}</b> </p>
                        <p>Total Amount : <b> ${totalAmount} </b></p>
                    </div>
                    :
                    <h1> Your cart is Empty</h1>
                }
                <button onClick={() => navigate("/")}> Continue Shopping </button>
            </div>
        </div>
    )
};