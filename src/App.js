import './App.css';
import Button from './components/Button';    
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [weatherDetails, setWeatherDetails]=useState({})
  const [city, setCity] = useState('')
  
  function onApiCall(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61d5e6bc53b5a60ab78b8a932f9ed27a`,{method:'GET'}).then(res=>res.json()).then(res=>setWeatherDetails(res))
  }
  return (
    <div className="App">

      <input placeholder="Search City Name" onChange={e=>setCity(e.target.value)} />

      <Button type="primary" label="Submit" onClick={onApiCall} />
      <Display weatherProperties={weatherDetails} />
    </div>
  );
}

export default App;
