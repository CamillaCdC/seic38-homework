const Card = (props) => {
  return (
    <div>
      {props.pokemon.map( (url) => <img src={url} key={url} alt='Pikachu' /> )}
    </div>
  )
};


export default Card;
