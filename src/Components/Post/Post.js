import React from "react";
import style from "./Post.module.css";
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

const Post = (props) => {
  const { comment } = props;
  const { title, body } = comment;

  return (
    <div className={style.container}>
      <ForumOutlinedIcon className={style.icon} />
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

export default Post;
