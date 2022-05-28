import React from "react";
import { useComics } from "../../hooks/useComics";

const Search = () => {
  const { buscar } = useComics();
  const search = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target;
    const [palabra] = new FormData(form).values();
    buscar(palabra);
    form.reset();
  };
  return (
    <div className="search" autoComplete="off" novalidate onSubmit={search}>
      <input className="search__input" placeholder="search" type="text"></input>
    </div>
  );
};

export default Search;
