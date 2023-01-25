import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"
import {StoreContext} from "../context/store-context"

export const Navbar = () => {
    const {totalCount} = useContext(StoreContext);
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Book Store </Link>
                <Link to="cart" className="cart">
                    <ShoppingCart size={32} />
                    <div className="badge">{totalCount}</div>
                </Link>
            </div>

        </div>
    );
};