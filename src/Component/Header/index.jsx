import { Link } from "react-router-dom";
// import { Tooltip } from 'react-tippy';
import OutsideClickHandler from 'react-outside-click-handler';
import './Header.css';
import { useState } from "react";

function Header(props) {
  console.log('rpprr', props.searchReasult);
  const [searchDropdown, setSearchDropdown] = useState(true);

  return (
    <>
      <div className={`row pt-2 pb-2 ${props.isDark ? 'headerDark' : 'headerLight'}`}>
        <div className="col-2 my-auto pl-5">
          <Link to="/">HOME</Link>
        </div>
        <div className="col-8 my-auto text-center">
          <input className="searchBar"
          id="search"
          name="search"
          onChange={(event) => props.onSearchChange(event)}
          placeholder="Enter the movie Name"
          autoComplete="off"
          onClick={() => setSearchDropdown(true)}
          />
        </div>
        <div className="col-2 text-right pr-5 my-auto">
          <label class="switch">
            <input type="checkbox" onChange={props.onThemeChange} />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => setSearchDropdown(false)}>
      <div className="searchComp">
        <ul className="searchDropdown">
          {searchDropdown && props.searchReasult && props.searchReasult.length > 0 && props.searchReasult.map((item) => {
            return (
            <Link to={`${item.imdbID}`}>
              <li>{item.Title}</li>
            </Link>
            )
          })}
        </ul>
      </div>
      </OutsideClickHandler>
    </>
  )
}

export default Header;