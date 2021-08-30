import React from "react";
import style from "./Comment.module.css";
import { MessageOutlined } from "@material-ui/icons";

const Comment = (props) => {
  const { comment } = props;
  const { title, body } = comment;

  return (
    <div className={style.container}>
      <MessageOutlined className={style.icon} />
      <div className={style.data}>
        <div className={style.info}>
          <span className={style.subtitle}>Title:</span> {title}
        </div>
        <div className={style.info}>
          <span className={style.subtitle}>Body:</span> {body}
        </div>
      </div>
    </div>
  );
};

export default Comment;
