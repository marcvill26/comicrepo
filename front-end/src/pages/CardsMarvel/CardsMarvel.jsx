import React from 'react';

export default function CardcomicList({ ...rest }) {
  const { hero, nameHero, writer, year, image, description, collection } = rest;
  return (
    
  
     
    <div className= "comic-card">
      <div className= "comic-card__info">
          <div className="comic-card__hero"><span>hero:</span> {hero}</div>
          <div className="comic-card__name"><span>name:</span> {nameHero}</div>
          <div className="comic-card__divider"></div>
          <p className="comic-card__bio"><span>desciption:</span> {description}</p>
          <button className="comic-card__button">read</button>
      </div>
        <img src={image} alt="comics" className="comic-card__image"></img>
    <div className="comic-card__footerInfo">
      <p>comic: {hero}</p>
      <p>writer: {writer}</p>
      <p>year: {year}</p>
    </div>

      </div>
   
  )
}
