import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Graph from "./components/graph/graph.component";
import Ashok from "./components/graph/graphPages/ASHOK.graphPage";
import Cipla from "./components/graph/graphPages/CIPLA.graphPage";
import Eicher from "./components/graph/graphPages/EICHER.graphPage";
import Reliance from "./components/graph/graphPages/RELIANCE.graphPage";
import TataSteel from "./components/graph/graphPages/TATASTEEL.graphPage";

import CircularProgress from "@material-ui/core/CircularProgress";

import Login from "./form/login.component";
import SignUp from "./form/signup.component";
import Navbar from "./components/navbar/navbar.component";

import firebase from "./config/firebase";
import Footer from "./components/footer/footer.component";

function App() {
  const [firebaseInit, setFirebaseInit] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInit(val);
    });
  }, [firebaseInit]);

  return firebaseInit !== false ? (
    <div>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Graph} />

          <Route exact path="/ashok" component={Ashok} />
          <Route exact path="/cipla" component={Cipla} />
          <Route exact path="/eicher" component={Eicher} />
          <Route exact path="/reliance" component={Reliance} />
          <Route exact path="/tatasteel" component={TataSteel} />
        </Switch>
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  ) : (
    <div id="loader">
      <CircularProgress />{" "}
    </div>
  );
}

export default App;
