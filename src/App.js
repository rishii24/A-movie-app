import React, { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import About from './About'
import Search from './components/Search'
import Results from './components/Results'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

require('dotenv').config()


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl = ` https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        console.log(results)
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }


  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s }
    });

  }



  return (
    <>
      <Router>
        <Header title="Movies DB" searchBar={false} />
        {
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div className="App">
                    <main>
                      <Search handleInput={handleInput} search={search} />
                      <Results results={state.results} />
                    </main>
                  </div>
                );
              }}
            ></Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        }

      </Router>
    </>
  );
}
export default App
