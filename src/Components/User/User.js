import React from "react";
import { PermIdentity } from "@material-ui/icons";
import style from "./User.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router";

const User = (props) => {
  const { user } = props;
  const { name, id } = user;

  const history = useHistory();

  const goToInfo = () => {
    history.push(`user/${id}`);
  };

  return (
    <Tooltip placement="right" title="Click for more details" arrow>
      <div onClick={goToInfo} className={style.container}>
        <PermIdentity className={style.icon} />
        {name}
      </div>
    </Tooltip>
  );
};

export default User;
