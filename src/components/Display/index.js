import React from 'react';

const Display=({weatherProperties})=>{
    console.log(weatherProperties);
 return (
   <table className="tabledata">
    <tbody>
        <tr>
            <th>City Name</th>
            <td>{weatherProperties?.name}</td>
        </tr>
        <tr>
            <th>Temperature</th>
          <td>{weatherProperties?.main?.temp}</td>
        </tr>
        <tr>
          <th>Humidity</th>
          <td>{weatherProperties?.main?.humidity}</td>
        </tr>
        <tr>
        <th>Timezone</th>
        <td>{weatherProperties?.timezone}</td>
        </tr>
    </tbody>
      
   </table>
 );   
}
export default Display;