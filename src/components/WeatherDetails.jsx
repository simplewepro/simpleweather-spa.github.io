import React from 'react';

function WeatherDetails({city, main, country, wind}) {
    let { temp, temp_min, temp_max, humidity, pressure } = main;

        temp = Math.round(temp);
    let tmin = Math.round(temp_min);
    let tmax = Math.round(temp_max);
        pressure = Math.round(pressure);

    return(
        <div className="details">
            <div className="location">
                <span>{city}</span>, {country}
            </div>
            <div className="temp">
                {temp}&deg;C <i className="fa fa-thermometer-half"></i>
            </div>
            <div className="show_more">
                <i className="fa fa-thermometer-1"></i> Minimal: {tmin}&deg;C <br/> 
                <i className="fa fa-thermometer-4"></i> Maximal: {tmax}&deg;C <br/><br/>
                <i className="fa fa-tint"></i> {humidity}% 
                <span> 
                    <i 
                        className="fa fa-long-arrow-up" 
                        style={{transform: `rotate(${wind.deg}deg)`}}>
                    </i> {wind.speed} mPh</span>
                <br/><br/>
                <i className="fa fa-tachometer"></i> Press: {pressure} mmHg
            </div>
        </div>
    );
}

export default WeatherDetails;