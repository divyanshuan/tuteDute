import "./friendrefferd.css";
import "../commancss.css";

import React from "react";
import Cards from "../cards/cards";

const Friendreffed = () => {
  return (
    <div>
      <div className="referal_sec">
        <div className="code_sec">
          <h1>Your Referral Code </h1>
          <p className="code__box box">EARSD</p>
        </div>
        <div className="wallet_sec">
          <div className="wallet  box ">
            <p> wallet balance</p>
            <p> ₹ 500</p>
          </div>
        </div>
      </div>

      <div className="card__section">
        <h1>Friends who enrolled(3)</h1>
        <div className="friends__cards">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Friendreffed;
