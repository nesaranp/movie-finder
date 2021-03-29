import './searchCard.css';
import { NavLink } from 'react-router-dom'

function SearchResultCard(props) {
  return (
    <>
      <NavLink className="searchCard" role="button" to={`${props.cardData.imdbID}`}>
        <img src={props.cardData.Poster} alt={props.cardData.Title} className="cardImage"/>
        <span className="cardTitle">{props.cardData.Title} ({props.cardData.Year})</span>
      </NavLink>
    </>
  );
};

export default SearchResultCard;