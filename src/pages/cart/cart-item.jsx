import React, { useContext } from "react";
import { StoreContext } from "../../context/store-context"
import "./cart.css"

export const CartItem = (props) => {
    const { id, title, author, price, bookImage, description } = props.data;
    const { removeFromCart, addToCart, cartItems, updateCartItemCount } = useContext(StoreContext);
    return (
        <div key={id} className="cartItem">
            <img src={bookImage} />
            <div className="title">
                <p><b>{title}</b><br />{author}</p>
                <p>{description}</p>
            </div>
            <div className="countHandler">
                <p> Price: ${price}</p>
                <div>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input height={20}
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)} > + </button>
                </div>
            </div>
        </div>
    );
}