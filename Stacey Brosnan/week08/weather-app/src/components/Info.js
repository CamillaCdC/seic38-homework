
const Info = (props) => {
  if (props && props.data === null) {
    return '';
  } else {
    return (
      <div>
        <h3>City: { props.data.name }</h3>
        <h3>Temperature: { props.data.main.temp }</h3>
        <h3>Wind speed: { props.data.wind.speed }</h3>
        <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
        <img src={`http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } alt={props.data.weather[0].description} />
      </div>
    );
  }
}

export default Info;
