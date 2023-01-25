import React, { useContext } from "react";
import { Trash } from "phosphor-react";
import { StoreContext } from "../../context/store-context"
import "./cart.css"

export const CartItem = (props) => {
    const { id, title, author, price, bookImage, description } = props.data;
    const { removeFromCart, addToCart, cartItems, updateCartItemCount } = useContext(StoreContext);
    return (
        <div key={id} className="cartItem">
            <img src={bookImage} />
            <div className="decsription">
                <p><b>{title}</b></p>
                <p>{author}</p>
                <p> Price: ${price}</p>
                <p> Count: {cartItems[id]}</p>
                <p><b>{description}</b></p>
                <Trash size={32} onClick={() => removeFromCart(id)}/>
                
                {/* <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div> */}
            </div>
        </div>
    );
}