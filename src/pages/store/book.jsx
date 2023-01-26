import React, { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import { StoreContext } from "../../context/store-context"

export const Book = (props) => {
    const { id, title, author, price, bookImage, description } = props.data;
    const { addToCart } = useContext(StoreContext);
    return (
        <div key={id} className="item">
            <img src={bookImage} />
            <hr/>
            <div className="decsription">
                <p><b>{title.length > 25 ? title.substring(1,25) +"..." : title }</b></p>
                <p><b>By: </b> {author}</p>
                <p> {description.length > 25 ? description.substring(1,30) : description} ...</p>
            </div>
            <div>
            <b className="price">${price}</b>
               <ShoppingCart className="addToCart" size={25} onClick={() => addToCart(id)} />

            </div>
        </div>
    );
}