import React from 'react';
import { Link } from 'react-router-dom';
import "./itemCard.css";

const ItemCard = ({id, name, model, price}) => {
    return (
        <div className='card-container glow'>
            <Link className="link-item" to={`/product/${id}`}>
                <h1>{name}</h1>
            </Link>
            <h3>{model}</h3>
            <h3>Price: {price}</h3>
        </div>
    )
}

export default ItemCard