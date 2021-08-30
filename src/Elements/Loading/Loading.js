import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <CircularProgress thickness={2} className={style.circular} size={60} />
  );
};

export default Loading;
