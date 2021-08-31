import React, { useState, useEffect } from "react";
import style from "./UserInfo.module.css";
import { useParams } from "react-router";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Post from "Components/Post/Post";
import api from "api";
import GeneralInfo from "./GeneralInfo";
import Loading from "Elements/Loading/Loading";
import Comment from "Components/Comment/Comment";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const UserInfo = () => {
  const { id } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [userData, setUserData] = useState({ info: {}, posts: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [isLoadingComment, setIsLoadingComment] = useState(false);

  const {
    users: { getUserData },
    comments: { getCommentsByPost },
  } = api;

  const getComments = async (id) => {
    setIsLoadingComment(true);
    const response = await getCommentsByPost(id);
    if (response) {
      setComments(response);
    }
    setIsLoadingComment(false);
  };

  useEffect(() => {
    const getAllUserData = async () => {
      const response = await getUserData(id);
      if (response) {
        setUserData(response);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    getAllUserData();
  }, [getUserData, id]);

  const handleChange = (id) => (event, newExpanded) => {
    setExpanded(newExpanded ? id : false);
    if (newExpanded) {
      getComments(id);
    } else {
      setComments([]);
    }
  };

  return (
    <div>
      <div className={style.title}>
        User Info
        <Tooltip
          placement="right"
          title="You can see more details about every conversation by clicking on it. Click again to close it, or you can click on another one."
        >
          <InfoOutlinedIcon />
        </Tooltip>
      </div>
      {isLoading ? (
        <div className={style.loadingContainer}>
          <Loading />
        </div>
      ) : (
        <div>
          <GeneralInfo data={userData.info} />
          {userData.posts.map((data) => {
            return (
              <Accordion
                expanded={expanded === data.id}
                onChange={handleChange(data.id)}
                key={data.id}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Post key={data.id} comment={data} />
                </AccordionSummary>
                <AccordionDetails>
                  {isLoadingComment ? (
                    <div className={style.loadingComment}>
                      <Loading />
                    </div>
                  ) : (
                    <div className={style.details}>
                      {comments.map((comment) => {
                        return <Comment key={comment.id} comment={comment} />;
                      })}
                    </div>
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
