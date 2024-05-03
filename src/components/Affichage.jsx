import React, { useState, useEffect } from "react";
import axios from 'axios';

const Affichage = () => {
    const [pokemons, setPokemons] = useState([]); // Utilisez un nom différent pour l'état

    useEffect(() => {
      axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/100')
        .then(response => {
          console.log(response.data)
          setPokemons (response.data) // Mettez à jour avec le nouveau nom d'état
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des pokémons:', error);
        });
    }, []);

    return (
      <div>
        <h2>Liste des Pokémon</h2>
        <ul>
          {pokemons.map(pokemon => (
            <li key={pokemon.id}>
              <img src={pokemon.image} alt="" />
              <li key={pokemon.pokedexId}/>
               {pokemon.name}</li>
          ))}
        </ul>
      </div>
    );
};

export default Affichage;