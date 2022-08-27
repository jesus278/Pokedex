import { searchPokemon } from "../api";
import React from "react";

const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const onChange = (evt) => {
    console.log(evt.target.value);
    setSearch(evt.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };
  return (
    <div className="search-container">
      <div className="searchbar">
        <input placeholder="Find your pokemon" onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
