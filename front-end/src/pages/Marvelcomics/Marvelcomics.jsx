import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardsMarvel from '../CardsMarvel/CardsMarvel';

const Marvelcomics = () => {
    const [marvelcomics, setMarvelComics]= useState([]);
    useEffect(() => {
        axios
        .get("marvelComics.json")
        .then(response => setMarvelComics(response.data))
    },[]);
    return (
        <div className="marvel-list">
           {marvelcomics.map((comicsMarvel) => {
            return(
                <CardsMarvel
                    key={comicsMarvel.id}
                    id={comicsMarvel.id}
                    hero={comicsMarvel.hero}
                    nameHero={comicsMarvel.nameHero}
                    writer={comicsMarvel.writer}
                    year={comicsMarvel.year}
                    image={comicsMarvel.image}
                    description={comicsMarvel.description}
                    collections={comicsMarvel.collections}
                    penciler={comicsMarvel.penciler}
                    issues={comicsMarvel.issues}
                />
            )
           })}
        </div>
    );
}

export default Marvelcomics;
