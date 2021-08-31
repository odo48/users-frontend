import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "helpers/routes";
import Menu from "Elements/Menu/Menu";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: "var(--grey)",
  },
  drawerPaper: {
    width: drawerWidth,
    background: "var(--grey)",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: "relative",
    height: "100vh"
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Menu classes={classes} />
        <main className={classes.content}>
          <Switch>
            {routes.map((info) => {
              return (
                <Route
                  exact
                  key={info.path}
                  component={info.component}
                  path={info.path}
                />
              );
            })}
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
