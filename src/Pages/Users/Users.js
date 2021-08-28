import React, { useState } from "react";
import User from "Components/User/User";
import { users, comments } from "helpers.js";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comment from "Components/Comment/Comment";
import style from "./Users.module.css";

const Users = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return users.map((user) => {
    return (
      <Accordion
        square
        expanded={expanded === user.id}
        onChange={handleChange(user.id)}
        key={user.id}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <User user={user} />
        </AccordionSummary>
        <AccordionDetails>
          <div className={style.details}>
            {comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    );
  });
};

export default Users;
