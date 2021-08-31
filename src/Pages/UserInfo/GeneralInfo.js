import React from "react";
import style from "./UserInfo.module.css";

const GeneralInfo = (props) => {
  const { data } = props;
  const {
    address: {
      city,
      geo: { lat, lng },
      street,
      suite,
      zipcode,
    },
    company: { bs, catchPhrase, name: companyName },
    email,
    name,
    phone,
    username,
    website,
  } = data;

  return (
    <div className={style.container}>
      <div className={style.subtitle}>Personal Information</div>
      <div className={style.subcontainer}>
        <div>
          <span>Name:</span>
          {name}
        </div>
        <div>
          <span>Username:</span>
          {username}
        </div>
        <div>
          <span>Email:</span>
          {email}
        </div>
        <div>
          <span>Phone:</span>
          {phone}
        </div>
        <div>
          <span>Website:</span>
          {website}
        </div>
      </div>

      <div className={style.subtitle}>Address Information</div>
      <div className={style.subcontainer}>
        <div>
          <span>City:</span>
          {city}
        </div>
        <div>
          <span>Geolocation:</span>
          {lat} | {lng}
        </div>
        <div>
          <span>Street:</span>
          {street}
        </div>
        <div>
          <span>Suite:</span> {suite}
        </div>
        <div>Zipcode: {zipcode}</div>
      </div>

      <div className={style.subtitle}>Professional Information</div>
      <div className={style.subcontainer}>
        <div>
          <span>Company Name:</span> {companyName}
        </div>
        <div>
          <span>Catch Phrase:</span> {catchPhrase}
        </div>
        <div>
          <span>BS: </span> {bs}
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
