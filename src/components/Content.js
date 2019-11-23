import React, { useState, useEffect } from 'react';

// import axios from 'axios';

import { getWeather } from '../services';

function Content(props) {
  const { location } = props.values;
  const { day } = props.values;
  const [ weather, setWeather ] = useState({});
  const [ iconWeather, setIconWeather ] = useState('');
  

  useEffect( () => {
    (async function loadWeather() {
      const response = await getWeather(location, day);
      if (response.status === 200) {
        console.log(response.data);
        setWeather(response.data);
        setIconWeather(`http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`);
      }
    })();
  }, [location, day]);

  return (
    <section className="content">
      { weather.main
          ? (
            <>
              <div className="temp d-flex justify-content-center align-items-center">
                <span>{weather.main.temp}</span>
                {/* <Image src={iconWeather}/> */}
                <img src={iconWeather} alt=""/>
              </div>   
              <div className="d-flex flex-column details">
                <div>
                  <div>Humedad</div>
                  <div>{ weather.main.humidity }</div>
                </div>
                <div>
                  <div>Precipitación</div>
                  <div>{ weather.main.pressure }</div>
                </div>
                <div>
                  <div>Tem. Máxima</div>
                  <div>{ weather.main.temp_max }</div>
                </div>
                <div>
                  <div>Tem. Mínima</div>
                  <div>{ weather.main.temp_min }</div>
                </div>
              </div>
            </>
          )
          : (
            <div className="temp d-flex justify-content-center align-items-center">
              <h3 className="text-center">use el buscadór e ingrese un lugar válido</h3>
            </div>
          )
        }
    </section>
  );
}

export default Content;
