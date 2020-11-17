const Temperature = (props) => {
  if (props.data == null) {
    return '';
  } else {
    return (
      <div>
        <h2>Weather in { (props.data.name) } </h2>
        <h3>Current Temperature { (props.data.main.temp) } degrees</h3>
        <h3>Today we have { (props.data.weather[0].description) } </h3>
      </div>
    )
  }
}

export default Temperature;
