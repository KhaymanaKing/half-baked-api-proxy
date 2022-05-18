import { useState } from 'react';
import { getYelpData } from './services/fetch-utils';
import Loading from './Loading';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [yelpData, setYelpData] = useState([]);
  const [yelpCity, setYelpQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleYelpSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await getYelpData(yelpCity);
    setYelpData(response.data.results);
    setIsLoading(false);
    // set the loading state to true
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
  
    // put the jsonified data in state and set the loading state to false
  }
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        <input onChange={e => setYelpQuery(e.target.value)}/>
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Search yelp</button>
      </form>
      <div className='yelp-business'>
        { isLoading ? <Loading/>
          :
          yelpData.map(({ name, price, image_url }, i) => <div className='business' key={name + i}>
            <img src={image_url}/>
            <p>{name} rates about a {price} on the price scale</p>
          </div>)
        }
      </div>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
  
