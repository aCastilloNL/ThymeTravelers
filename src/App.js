import { Switch, Route } from "react-router-dom";

import Landing from "./components/landing/Landing";
import PageTwo from "./components/pageTwo/PageTwo";
import PageThree from "./components/pageThree/PageThree";

import './App.css';

const App = () => (
  /* NOTE. IF YOU WANT TO CHANGE THE LINK: CHANGE IT HERE AND INSIDE LINK IN NAVBAR.JS */
  <Switch>
    <Route exact path="/">
      <Landing />
    </Route>
    <Route exact path="/edible">
      <PageTwo />
    </Route>
    <Route exact path="/not-edible">
      <PageThree />
    </Route>
  </Switch>
);

export default App;
