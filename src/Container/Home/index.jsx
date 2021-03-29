import './home.css';
import SearchResultCard from '../../Component/SearchResultCard';
import { Redirect } from 'react-router-dom';

function Home(props) {
  
  return (
    <>
      <div className="HomeContatiner">
        {props.searchReasult && props.searchReasult.length > 0 && props.searchReasult.map((item) => {
          return <SearchResultCard cardData={item} />
        })}
      </div>
    </>
  )
}

export default Home;