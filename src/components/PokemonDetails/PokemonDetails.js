// Detailed listing of pokemon stats and sprites
// Pokemon card to show in list of pokemon // This will display the data and team of pokemon
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { currentFlavorText, addToTeam } from '../../state/pokedex/pokedexSlice'

import { typesAsArray } from '../../utils';

import './PokemonDetails.css';
import { current } from '@reduxjs/toolkit';

function PokemonDetails(props) {
  const { id, name, types, sprite } = props;
  
  const typesArray = typesAsArray(types);

  const [isTextLoaded, setIsTextLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadFlavorText = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data = await response.json();

      dispatch(currentFlavorText(data.flavor_text_entries[0].flavor_text));
      setIsTextLoaded(true);

      console.log("Flavor Text Loaded:")
      console.log(data.flavor_text_entries[0].flavor_text)
    }

    loadFlavorText();
  }, [id, dispatch]);

  const flavorText = useSelector(state => state.pokedex.flavorText);  

  return (
    <div className="PokemonDetails">
      <img src={sprite} alt={name} />
      <h2>{name}</h2>
      <div className="typesContainer">
        {
          typesArray.map((type, index) => {
            return (
            <div 
              key={index}
              className={`detailsType ${type}`}
            >{type}</div>
            )
          })
        }
      </div>
      {
        isTextLoaded 
        ? <p>{flavorText}</p> 
        : <p>Loading...</p>
      }
      <div>stats</div>
      <div>moves</div>
      <button
        onClick={(e) => {dispatch(addToTeam(id))}}
      >Add to Team</button>
    </div>
  );
}

export default PokemonDetails;