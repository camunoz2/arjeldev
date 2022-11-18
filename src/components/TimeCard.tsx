import { useEffect, useState } from "react";

const TimeCard = () => {
  const POKEMON_NUMBER = 153;

  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    sprites: {
      front_default: "",
    },
  });
  const [id, setId] = useState(
    Math.round(Math.max(1, Math.random() * POKEMON_NUMBER))
  );

  useEffect(() => {
    // get pokemon data between 1 - 151 for I GEN pokemons
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const parsedData = await response.json();
      setPokemon(parsedData);
    };
    fetchData();
  }, [id]);

  const setRandomId = () => {
    setId(Math.round(Math.max(1, Math.random() * POKEMON_NUMBER)));
  };

  return (
    <div className="col-span-1 row-span-3 lg:row-span-2 text-center rounded-xl py-4 bg-arjelgrey1 flex flex-col justify-center items-center">
      <h2 className="text-base md:text-2xl font-bold tracking-tighter">
        Te tocó:
      </h2>
      <p>{pokemon ? pokemon.name : "NOT FOUND"}</p>
      <div className="py-2">
        <img src={pokemon.sprites && pokemon.sprites.front_default} />
        <h3 className="uppercase font-bold  text-xl">N~${pokemon.id}</h3>
        <button
          className="p-2 bg-arjelgrey2 rounded-sm"
          onClick={() => setRandomId()}
        >
          Quiero Otro!
        </button>
      </div>
    </div>
  );
};
export default TimeCard;
