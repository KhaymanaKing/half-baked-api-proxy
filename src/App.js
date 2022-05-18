import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import Spotify from './Spotify';
import './App.css';


function App() {
  const data = [
    { value: 1, name: 'A' },
    { value: 2, name: 'B' },
    { value: 3, name: 'C' }
  ];
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      <WeatherSearch /> 
      <Spotify/>
    </div>
  );
}

export default App;
