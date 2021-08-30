import React, { useState, useEffect } from "react";
import style from "./UserInfo.module.css";
import { useParams } from "react-router";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comment from "Components/Comment/Comment";
import api from "api";
import GeneralInfo from "./GeneralInfo";
import Loading from "Elements/Loading/Loading";
const UserInfo = () => {
  const { id } = useParams();
  const [expanded, setExpanded] = useState(null);
  const [userData, setUserData] = useState({ info: {}, comments: [] });
  const [isLoading, setIsLoading] = useState(true);

  const {
    users: { getUserData },
  } = api;

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
    // if (newExpanded) {
    //   getAllUserData(id);
    // } else {
    //   setUserData({ info: {}, comments: [] });
    // }
  };

  return (
    <div>
      <div className={style.title}>User Info</div>
      {isLoading ? (
        <div className={style.loadingContainer}>
          <Loading />
        </div>
      ) : (
        <div>
          <GeneralInfo data={userData.info} />
          {userData.comments.map((data) => {
            return (
              <Accordion>
                <AccordionSummary
                  square
                  expanded={expanded === data.id}
                  onChange={handleChange(data.id)}
                  key={data.id}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Comment key={data.id} comment={data} />
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={style.details}></div>
                  </AccordionDetails>
                </AccordionSummary>
              </Accordion>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
