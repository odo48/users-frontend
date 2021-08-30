import React from "react";
import style from "./UserInfo.module.css";

const GeneralInfo = (props) => {
  const { data } = props;
  const { address, company, email, name, phone, username, website } = data;
  const { city, geo, street, suite, zipcode } = address;
  const { bs, catchPhrase } = company;

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
          {geo.lat} | {geo.lng}
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
          <span>Company Name:</span> {company.name}
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
