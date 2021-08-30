import React, { useState, useEffect } from "react";
import User from "Components/User/User";
import style from "./Users.module.css";
import Loading from "Elements/Loading/Loading";
import api from "api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    users: { getUsers },
  } = api;

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await getUsers();
      if (response) {
        setErrorMessage(null);

        setIsLoading(false);
        setUsers(response);
      } else {
        setErrorMessage("Error");
        setIsLoading(false);
      }
    };

    getAllUsers();
  }, [getUsers]);

  return (
    <div className={style.container}>
      <div className={style.title}>Users page</div>
      {isLoading ? (
        <div className={style.loadingContainer}>
          <Loading />
        </div>
      ) : (
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })
      )}
      <div className={style.error}>{errorMessage}</div>
    </div>
  );
};

export default Users;
