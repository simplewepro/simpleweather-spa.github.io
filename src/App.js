import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCard from './components/WeatherCard';

import './fonts/fonts.css';
import './fonts/owfont-regular.min.css';
import './App.css';

class App extends Component {
    addCity = () => {
        this.props.onAddCity(this.weatherInput.value);
        this.weatherInput.value = '';
    }
    deleteCity(index) {
        this.props.onDeleteCity(index);
    }
    render() {
        return (
            <div className="container">
                <header className="form_wrapper">
                    <input 
                        type="text"
                        name="weather"
                        className="weather_input"
                        ref={(input) => { this.weatherInput = input }}
                    />
                    <button 
                        onClick={this.addCity}
                        className="add_button"
                    >
                        Add city
                    </button>
                </header>
                <div className="cards_wrapper">
                    {this.props.cityList.map((city, index) =>
                        <WeatherCard 
                            city={city} 
                            key={index} 
                            close={this.deleteCity.bind(this, index)}
                        />
                    )}
                </div>
            </div>
        );
    }
}
//acad55666b2ff49fc6c54f5d88923cdb

export default connect(
    state => ({
        cityList: state
    }),
    dispatch => ({
        onAddCity: (city) => {
            dispatch({ type: 'ADD_CITY', payload: city });
        },
        onDeleteCity: (index) => {
            dispatch({ type: 'DELETE_CITY', payload: index });
        }
    })
)(App);
