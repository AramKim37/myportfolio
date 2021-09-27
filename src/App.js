import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/page/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
