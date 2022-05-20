import { useState } from 'react';
import { getWeatherData } from './services/fetch-utils';
import Loading from './Loading';

export default function WeatherSearch() {
  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  
  const [query, setQuery] = useState(''); 
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState (false);

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await getWeatherData(query);
    setWeather(response.daily);
    setIsLoading(false);
        // set the loading state to true
        // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
      // put the jsonified data in state and set the loading state to false
  }
      
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather for a city
        <input onChange={e => setQuery(e.target.value)}/>
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get weather</button>
      </form>
      <div className='weather'>
        {
          isLoading ? <Loading/>
            : weather.map(({ temp, clouds, }, i) => <div key={temp + clouds + i}>
              <h2>Temp {`${temp.day - 273.5}` * 9 / 5 + 32}</h2>
              <h3>Cloud Coverage {clouds} %</h3>
            </div>)
        }
      </div>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
