import Header from './Component/Header';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Container/Home';
import MovieDetails from './Container/MovieDetails';

function App() {
  const [searchReasult, setSearchReasult] = useState([]);
  const [isDark, setIsDark] = useState(false);
  // const backgroundStyle = () => {
  //   if (theme === "dark") {
  //     return {backgroundColor:"#353333", height:"100vh"};
  //   }
  //    else return {backgroundColor:"#cac5c5", height:"100vh"}
  // };
  // const [selectedValue, setSelectedValue] = useState();

  const onSearchChange = (event) => {
    console.log('-------', event.target.value);
    axios.get(`http://www.omdbapi.com/?s=${event.target.value}&apikey=14d639a0`)
    .then((res) => {
      setSearchReasult(res.data.Search);
    });
  }

  const onThemeChange = () => {
    setIsDark(!isDark);
  }
  
  return (
    <Router>
      <div className="container-fluied" 
      style={isDark ? {backgroundColor:"#353333", height:"100vh"} : {backgroundColor:"#cac5c5", height:"100vh"}}>
        <Header onSearchChange={onSearchChange} searchReasult={searchReasult} onThemeChange={onThemeChange} isDark={isDark}/>
        <Switch>
          <Route path={'/:id'}>
            <MovieDetails />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
