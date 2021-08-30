import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import routes from "helpers/routes";
import { useHistory, useLocation } from "react-router-dom";
import style from "./Menu.module.css";

const shownPages = routes.filter((route) => route.show === true);

const Menu = (props) => {
  const { classes } = props;
  let history = useHistory();
  let location = useLocation();

  const onPageChange = (path) => {
    history.push(path);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <List>
          {shownPages.map((info) => {
            const Icon = info.icon;
            return (
              <ListItem
                onClick={() => onPageChange(info.path)}
                button
                key={info.path}
                className={`${
                  info.path === location.pathname && style.active
                } ${style.item}`}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={info.name} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;
