import './movieDetails.css';

function MovieDetailsCard(props) {
  const cardData = props.cardData;

  console.log('props', cardData);
  
  return (
    <>
      {cardData && 
      (<div className="movieCard">
        <img src={cardData.Poster} alt={cardData.Title} className="movieCardImage"/>
        <div className="discription">
          <h3>{cardData.Title} ({cardData.Year})</h3>
          <p className="mt-3">
            IMDB Rating: {cardData.imdbRating} <br />
            Runtime: {cardData.Runtime} <br />
            Genre: {cardData.Genre} <br />
            Director: {cardData.Director} <br />
            Country: {cardData.Country} <br />
          </p>
          <p>
            {cardData.Plot}
          </p>
          </div>
      </div>)}
    </>
  );
};

export default MovieDetailsCard;