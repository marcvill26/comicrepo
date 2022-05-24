import React from 'react';

export default function CardcomicList({ ...rest }) {
  const { hero, nameHero, writer, year, image, description, collection } = rest;
  return (
    
  
     
    <div className= "comic-cardDc">
      <div className= "comic-cardDc__info">
          <div className="comic-cardDc__hero"><span>hero:</span> {hero}</div>
          <div className="comic-cardDc__name"><span>name:</span> {nameHero}</div>
          <div className="comic-cardDc__divider"></div>
          <p className="comic-cardDc__bio"><span>desciption:</span> {description}</p>
          <button className="comic-cardDc__button">read</button>
      </div>
        <img src={image} alt="comics" className="comic-cardDc__image"></img>
    <div className="comic-cardDc__footerInfo">
      <p>comic: {hero}</p>
      <p>writer: {writer}</p>
      <p>year: {year}</p>
    </div>

      </div>
   
  )
}

