import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import "./product.css";

const Product = () => {
    const items = useSelector((state)=>state.items);
    const location = useLocation();
    const val = location.pathname.split("/")[2];

    const [selItem, setSelItem] = useState(items);

    const mainItem = selItem.filter((item)=>(
        item.id==val
    ))

    return (
        <div className="prod-container">
            <div className="prod-wrapper">
                <div className="prod-left">
                    Image
                </div>
                <div className="prod-right">
                    <h1>Name: {mainItem[0].name}</h1>
                    <h3>Price: {mainItem[0].price}</h3>
                    <p>
                        Desc: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci ut magni fugit asperiores perspiciatis, veritatis non consectetur labore et.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product