import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

const Weather = (props) => {

    const [searchinput,setSearchinput]=useState('');
    const[temp,setTemp]=useState('');
    const[Max,setMax]=useState('');
    const[location,setLocation]=useState('');
    const[weather,setWeather]=useState('');
    const[des,setDes]=useState('');
    const[sunrise,setSunrise]=useState([]);
    const[sunset,setSunset]=useState([]);
    const[min,setMin]=useState('');
    const[country,setCountry]=useState('');
    const[wind,setWind]=useState(''); 
    const[data,setData]=useState('');


    const mychange=(e)=>{
        setSearchinput(e.target.value);
    }

/*    componentDidMount(){
        getdata("bangalore");
    }
   */

 

    const getdata = async () =>{
        const data=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchinput}&APPID=496e4cf76f90cdb5f3767570579a6097`);
        setData(data);
        const country=(data.data.sys.country);
        const temp=Math.floor(data.data.main.temp-273.15);
        const Max=Math.floor(data.data.main.temp_max-273.15);
        const Min=Math.floor(data.data.main.temp_min-273.15);
        const Tempfull=(` temperature:${temp}  max-temp:${Max}  min-temp:${Min} deg celcius` );
        const city=(`${data.data.name}`);
        const weather=(` weather is ${data.data.weather[0].main}`);
        const des=(`${data.data.weather[0].description}`);
        const sunrise=new Date(data.data.sys['sunrise']*1000);
        const sunset=new Date(data.data.sys['sunset']*1000);
        const wind=(data.data.wind.speed);
        setWind(wind);
        const sun= (`${sunrise} ${sunset}`)
        setTemp(temp);
        setMax(Max);
        setMin(Min);
        console.log(Tempfull);
        setLocation(city);
        setWeather(weather);
        setDes(des);
/*        console.log(sunrise);
        setSunrise(sunrise);
        setSunset(sunset);*/
        setSunset(sun);
        console.log(country);
        console.log(sunrise);

    }





  return (
    <div className="main">
        <div className="searchbar">
        <input type="text" placeholder="bangalore"  onChange={mychange}/>
        <button onClick={getdata}><i class="fas fa-rocket"></i></button>
        </div>
            <div className="data">
                <h1>{temp} <i class="fas fa-temperature-low"></i></h1>
                <h1>{des} <i class="fas fa-cloud-sun"></i></h1>
                <h1><i class="fas fa-wind"></i> {wind} km/hr</h1>
                <h1>{location} <i class="fas fa-map-marker-alt"></i></h1>
            </div>

    </div>
  )
}

export default Weather;
