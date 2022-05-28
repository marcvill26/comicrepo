import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShopCards from '../../ShopCards/ShopCards';

const Shop = () => {
    const [shopcards, setShopCards]= useState([]);
    useEffect(() => {
        axios
        .get("shop.json")
        .then(response => setShopCards(response.data))
    },[]);
    return (
        <div className="shopCard">
            {shopcards.map((shopCards) =>{
                return(
                    <ShopCards
                        key={shopCards.id}
                        id={shopCards.id}
                        article={shopCards.article}
                        urlImg={shopCards.urlImg}
                        price={shopCards.price}
                        stock={shopCards.stock}
                    />
                )
            })}
        </div>
    );
}

export default Shop;
