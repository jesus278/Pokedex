import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Pokedex from "../components/Pokedex";
import { getPokemonData, getPokemon } from "../api";

const { useState, useEffect } = React;

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const data = await getPokemon();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
    } catch (e) {}
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <Searchbar />
        <Pokedex pokemon={pokemon} />
      </div>
    </div>
  );
}
