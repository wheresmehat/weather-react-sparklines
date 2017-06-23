import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {


    renderWeather(cityData) {

        const name = cityData.city.name;

        const temps = cityData.list.map(weather3hour => weather3hour.main.temp);
        const press = cityData.list.map(weather3hour => weather3hour.main.pressure);
        const humids = cityData.list.map(weather3hour => weather3hour.main.humidity);

        const {lat, lon} = cityData.city.coord;
    
        return (

            <tr key={name}>
                <td className="col-xs-3 col-md-3"><GoogleMap lat={lat} lon={lon} /></td>
                <td className="col-xs-3 col-md-3"><Chart data={temps} color="orange" units="&deg;C" /></td>
                <td className="col-xs-3 col-md-3"><Chart data={press} color="black"  units="hPa" /></td>
                <td className="col-xs-3 col-md-3"><Chart data={humids} color="blue" units="%" /></td>
            </tr>
        );

    }


    render() {

        return (

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="col-xs-3 col-md-3">City</th>
                        <th className="col-xs-3 col-md-3">Temperature (&deg;C)</th>
                        <th className="col-xs-3 col-md-3">Pressure (hPa)</th>
                        <th className="col-xs-3 col-md-3">Humidity (%)</th>
                    </tr>
                </thead>

                <tbody>

                    {this.props.weather.map(this.renderWeather)}

                </tbody>

            </table>

        );

    }

}


/*function mapStateToProps(state) { // ES5
    
    return { weather: state.weather };
}*/

function mapStateToProps({ weather }) {

    return { weather };
}

export default connect(mapStateToProps)(WeatherList);