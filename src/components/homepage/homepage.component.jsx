import React from "react";

import Popup from "../popup/popup.component";
import Dashboard from "../dashboard/dashboard.component";

import firebase from "../../config/firebase";

function Homepage(props) {
  if (!firebase.getCurrentUsername()) {
    alert("Please login first");
    props.history.replace("/login");
    return null;
  }
  return (
    <div>
      <Popup />
      <Dashboard />
    </div>
  );
}

export default Homepage;
