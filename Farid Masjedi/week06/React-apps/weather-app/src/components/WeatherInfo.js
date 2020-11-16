import React, {Component} from 'react';

class WeatherInfo extends Component {
  // this class will take the props that has been passed by WeatherEngine component -
  // into it. the props are comes from WeatherEngine states that updates by axios (ajax).
  // this.props.todayInfo = [day of the week, temprature,
                          // day temprature, night temprature,
                          // max temprature, min temprature,
                          // temprature description, weather icon,
                          // wind speed];

  // the forecastInfo will give us information about nex seven days.
  // this.props.forecatsInfo = [day of the week, weather icon,
                            //  max temprature, min temprature];
  // note : {' \u00B0'} => this will make a degree symbol in jsx.
  
  render(){
    return(
      <div className='all-info'>

        <div className='container-city'>
          <h2>{this.props.city} </h2>
          <h3>{this.props.todayInfo[0]} </h3>
        </div>

        <div className='container-day'>
          <div className='container-icon'>
            <img src={this.props.todayInfo[7]} />
            <p> {this.props.todayInfo[6]} </p>
          </div>

          <div className='container-Ctemp'>
            <p> {this.props.todayInfo[1]}{' \u00B0c'} </p>
          </div>
        </div>

        <div className='container-Tinfo'>
          <p>Day: {this.props.todayInfo[2]}{' \u00B0c'} </p>
          <p>Night: {this.props.todayInfo[3]}{' \u00B0c'} </p>
          <p>Max:  {this.props.todayInfo[4]}{' \u00B0c'} </p>
          <p>Min: {this.props.todayInfo[5]}{' \u00B0c'} </p>
          <p>Wind: {this.props.todayInfo[8]}{' Km/h'} </p>
        </div>

        <div className='table'>
          {this.props.forecastInfo.map( (forecast,index) => (
            <div className='forecast'>
              <p> {forecast[0]} </p>
              <img src={forecast[1]} />
              <p> {forecast[2]}{' \u00B0c'} </p>
              <hr />
              <p> {forecast[3]}{' \u00B0c'} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
