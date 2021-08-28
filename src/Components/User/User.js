import React from "react";
import { PermIdentity } from "@material-ui/icons";
import style from "./User.module.css";

const User = (props) => {
  const { user } = props;
  const { name } = user;

  return (
    <div className={style.container}>
      <PermIdentity className={style.icon} />
      {name}
    </div>
  );
};

export default User;
