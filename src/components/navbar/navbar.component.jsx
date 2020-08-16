import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import firebase from "../../config/firebase";

import fire from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: "#016098",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const [user, setuser] = useState("");

  fire.auth().onAuthStateChanged(function (user) {
    if (user) {
      setuser(user);
    } else {
      console.log("no user found", user);
      setuser(user);
    }
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FLIPR Stocks
          </Typography>
          <Button color="inherit" onClick={logout}>
            {user ? "LOGOUT" : ""}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );

  function logout() {
    firebase.logout().then(() => alert("logout successful"));
    props.history.replace("/login");
  }
}
