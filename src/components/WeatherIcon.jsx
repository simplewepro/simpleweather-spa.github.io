import React from 'react';

function WeatherIcon({ weatherCode, className}) {
    const owfClass = `owf owf-${weatherCode.id} owf-5x`;
    return(
        <div className={className}>
            <i className={owfClass}></i>
        </div>
    );
}

export default WeatherIcon;