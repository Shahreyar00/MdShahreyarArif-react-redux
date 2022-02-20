import React, { useEffect, useState } from 'react';
import "./home.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import ItemCard from '../../components/itemcard/ItemCard';
import { FaFilter } from 'react-icons/fa';
import { getItemsAsync } from '../../redux/itemSlice';

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector((state)=>state.items);
    const [searchCat, setSearchCat] = useState(null);

    useEffect(()=>{
        dispatch(getItemsAsync());
    },[dispatch])


    const filteredItems = items.filter((item)=>{
        if(searchCat===null){
            return items;
        }
        else{
            return item.categoryId===searchCat;
        }
    });

    return (
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-header">
                    <FaFilter className="search-icon" />
                    <button onClick={(e)=>setSearchCat(null)}>All</button>
                    <button onClick={(e)=>setSearchCat(1)}>Mobile</button>
                    <button onClick={(e)=>setSearchCat(0)}>Laptop</button>
                </div>
                <div className="home-display">
                    {filteredItems.map((item)=>(
                        <ItemCard key={item.id} id={item.id} name={item.name} model={item.model} price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home