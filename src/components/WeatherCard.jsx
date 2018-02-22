import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';

import './WeatherCard.css';

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            time: 1,
            weather: '',
            main: '',
            country: '',
            expand: false,
            wind: '',
            fetching: true
        }
    }

    fetchWeatherData = city => {
        const baseUrl = `http://api.openweathermap.org`;
        const path = `/data/2.5/weather`;
        const appId = `acad55666b2ff49fc6c54f5d88923cdb`;
        const query = `units=metric&lang=ru&appid=${appId}`;

        fetch(`${baseUrl}${path}?q=${city}&${query}`)
            .then(response => response.json())
            .then(data => {
                const date = new Date();
                const time = date.getHours();
                this.setState({
                    weather: data.weather[0],
                    time,
                    city,
                    main: data.main,
                    country: data.sys.country,
                    wind: data.wind,
                    fetching: false
                });
            })
            .catch(error => this.props.close());
        
    }

    componentDidMount(){
        this.fetchWeatherData(this.props.city);
    }

    showMore = () =>{
        this.setState({
            expand: !this.state.expand
        });
    }

    handleRefresh = (event) => {
        event.stopPropagation();
        this.setState({
            fetching: true
        });
        this.fetchWeatherData(this.props.city);
    }

    render() {
        let { close, city } = this.props;
        let { main, country, time, weather, expand, fetching, wind } = this.state;

        return fetching ? 
            <div className="card_wrapper loading">
                <button onClick={close} className="close_tag">
                    <i className="fa fa-close"></i>
                </button>
                <i className="fa fa-spinner fa-spin"></i>
            </div>
            :
            <div className={`card_wrapper ${expand ? 'expand': ''}`} onClick={this.showMore} >
                <button onClick={close} className="close_tag">
                    <i className="fa fa-close"></i>
                </button>
                <WeatherIcon 
                    className="weather_icon" 
                    time={time}
                    weatherCode={weather}
                />
                <WeatherDetails
                    city={city}
                    main={main}
                    country={country}
                    wind={wind}
                />
                <button className="refresh" onClick={this.handleRefresh}>
                    <i className="fa fa-refresh"></i> Refresh
                </button>
            </div>
    }
}

export default WeatherCard;
