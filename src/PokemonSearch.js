import { useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import Loading from './Loading';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await getPokemon(query);
    setPokemon(response.data.results);
    setIsLoading(false);
        // set the loading state to true
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
  
        // put the jsonified data in state and set the loading state to false
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokemon 
        <input onChange={e => setQuery(e.target.value)}/>
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get pokemon</button>
      </form>
      <div className='pokemon-list'>
        
        {
          isLoading ? <Loading/>
            :
            pokemon.map(({ 
              pokemon, 
              type_1, 
              type_2, hp, 
              url_image, 
              attack, 
              defense, 
              ability_1, 
              ability_2,
              ability_hidden,
            }, i) => <div className='pokemon' key={pokemon + i}>
              <h2>{pokemon}</h2>
              <p>Types: {type_1}, {type_2}</p>
              <p>Hit Points:{hp}</p>
              <p>Attack: {attack}</p>
              <p>Defense: {defense}</p>
              <p>Ability 1: {ability_1}</p>
              <p>Ability 2: {ability_2}</p>
              <p>Hidden Move: {ability_hidden}</p>
              <img src={url_image}/>
            </div>)}
      </div>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );  

}
