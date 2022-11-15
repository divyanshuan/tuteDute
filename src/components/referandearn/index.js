import React from "react";
import "./referandearn.css";
import "../../commancss.css";
import Refercontent from "./refercontent";

const ReferandEarn = () => {
  return (
    <>
      {" "}
      <div className="main_container">
        <div className="card__div">
          <div className="box referal__card">
            <div className="title">
              <p> Referal Earning</p>
              <p> Total Referrals</p>
              <p> Wallet Balance</p>
            </div>
            <div className="value">
              <p> ₹ 2,500</p>
              <p> 7</p>
              <p> ₹ 500</p>
            </div>
            <div className="card_button">
              <button className="custom_button">Withdraw Balance</button>
            </div>
          </div>
        </div>
        <div className="referal">
          <h3>Your Referal Code</h3>
          <h2> EDCH54</h2>
        </div>
      </div>
      {/*  */}
      <div className="refer__content">
        <h3> How it works ?</h3>
        <Refercontent />
      </div>
      <div className="terms">
        <p>Friends Who Enrolled</p>
      </div>
    </>
  );
};

export default ReferandEarn;
