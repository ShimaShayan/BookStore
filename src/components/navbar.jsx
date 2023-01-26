import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart,Books } from "phosphor-react";
import "./navbar.css"
import {StoreContext} from "../context/store-context"

export const Navbar = () => {
    const {getTotalCount} = useContext(StoreContext);
    const totalCount= getTotalCount();
    return (
        <div className="navbar">
            <div className="links">
                <Books size="60" color="#e71936"/>
                <div><Link to="/"> Book Store </Link></div>
                <div className="badgeContainer"> <Link to="cart" className="cart">
                    <ShoppingCart size={32} />
                    <div className="badge">{totalCount}</div>
                </Link></div>
            </div>
        </div>
    );
};