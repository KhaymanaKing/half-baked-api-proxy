import React, { useState } from 'react';



const SpotifyDropDown = props => {
  const [selectedValue, setSelectedValue] = useState('');
    
  return (
    <div>
      <form>
        <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
          {props.options.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
        </select>
        <button type='submit'>Search </button> 
      </form>
    </div>
  );
};

export default SpotifyDropDown;
  
