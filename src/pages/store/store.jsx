import React from "react";
import "./store.css"
import { BOOKS } from "../../books"
import { Book } from "./book";


export const Store = () => {
    return (
        <div className="books">
            {
                BOOKS.map((book) => (
                    <Book data={book} />
                ))}
        </div>
    )
};