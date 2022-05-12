import React from 'react';

const ShopCards = ({...rest}) => {
    const {urlImg, article,price, stock}=rest;
    return (
        <div className="shopCard__cards">
            <div className="shopCard__article">
                <img src={urlImg} alt="article" className="shopCard__img"></img>
            </div>
            <div className="shopCard__info">
                <p >article: {article}</p>
                <p>price:<span className="shopCard__price"> {price} €</span> </p>
                <p>stock: {stock}</p>
               
            </div>
            <button className="shopCard__button">shop</button>
        </div>
    );
}

export default ShopCards;
