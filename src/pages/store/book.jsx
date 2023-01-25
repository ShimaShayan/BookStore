import React, { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import { StoreContext } from "../../context/store-context"

export const Book = (props) => {
    const { id, title, author, price, bookImage, description } = props.data;
    const { addToCart } = useContext(StoreContext);
    return (
        <div key={id} className="item">
            <a className="addToCart" onClick={() => addToCart(id)}><ShoppingCart size={25} /></a>
            <img src={bookImage} />
            <div className="decsription">
                <p><b>{title}</b></p>
                <p><b>{author}</b></p>
                <p><b>${price}</b></p>
                <p><b>{description}</b></p>
            </div>
        </div>
    );
}