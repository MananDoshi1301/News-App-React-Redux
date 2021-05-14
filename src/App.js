import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import SearchPage from "./SearchPage/SearchPage";
import SearchResult from "./SearchResult/SearchResult";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/result/:type/:link">
            <SearchResult />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
