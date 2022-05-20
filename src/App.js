import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
// import Spotify from './Spotify';
import './App.css';


function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      <WeatherSearch /> 
      {/* <Spotify/> */}
    </div>
  );
}

export default App;
