import { useState } from 'react'
//import axios from  'axios'

function App() {
  const [data, setData]=useState({})
  const [location, setLocation]=useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e610ab3a74b95e46618586a8d3b61a21`

  const searchLocation = (event)=> {
    if (event.key === 'Enter'){
      axios.get(url).then((response)=> {
        setData(response.data)
        console.log(response.data)
      })

      setLocation('');
    }
  }

  return(
    <div className='app'>
      <div className='search'>
        <input 
        type='text'
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyDown={searchLocation}/>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            {data.main ? <h1> {data.main.temp.toFixed()}°F</h1> : null}
            <h1> 60°F</h1>
          </div>
          <div className='description'>
          {data.weather ? <p> {data.weather[0].main}°F</p> : null}
            
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            <p>65°F</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}

            <p>20%</p>
          </div>
          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
            <p>wind speed</p>
          </div>

        </div>


      </div>


    </div>
  )
}


export default App