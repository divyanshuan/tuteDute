import React from "react";
import "./cards.css";
import "../commancss.css";

const Tiles = (props) => {
  return (
    <>
      <p className="tiles_title flex">{props.title}</p>
    </>
  );
};

const Cards = () => {
  return (
    <div className="card_area">
      <>
        <div className="main_conatiner">
          <div className="heading__card felx__row">
            <div className="card__title">Dhiraj Saxsena</div>
            <p>16 may 2006</p>
          </div>
          <div className="coursesenroll">
            <p>Courses Enrolled(6)</p>
          </div>
          <div className="tiless ">
            <Tiles title="UI/UX" />
            <Tiles title="Illustrator" />
            <Tiles title="addobe" />
            <Tiles title="MERN " />
            <Tiles title="Java" />
            <Tiles title="Ruby" />
            <Tiles title="Photoshop" />
          </div>
          <div className="coursesenroll">
            <div className="fler">
              Referral Amount <p className="amount"> $300</p>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="main_conatiner">
          <div className="heading__card felx__row">
            <div className="card__title">Divyanshu verma</div>
            <p>16 march 2002</p>
          </div>
          <div className="coursesenroll">
            <p>Courses Enrolled(6)</p>
          </div>
          <div className="tiless ">
            <Tiles title="UI/UX" />
            <Tiles title="Illustrator" />
            <Tiles title="Python" />
            <Tiles title="MERN" />
            <Tiles title="Java" />
            <Tiles title="C++" />
          </div>
          <div className="coursesenroll">
            <div className="fler">
              Referral Amount <p className="amount"> $300</p>
            </div>
          </div>
        </div>
      </>{" "}
      <>
        <div className="main_conatiner">
          <div className="heading__card felx__row">
            <div className="card__title">Dhiraj Saxsena</div>
            <p>16 may 2006</p>
          </div>
          <div className="coursesenroll">
            <p>Courses Enrolled(6)</p>
          </div>
          <div className="tiless ">
            <Tiles title="UI/UX" />
            <Tiles title="Illustrator" />
            <Tiles title="addobe" />
            <Tiles title="MERN " />
            <Tiles title="Java" />
            <Tiles title="Ruby" />
            <Tiles title="Photoshop" />
            <Tiles title="Autocad" />
            <Tiles title="IOT" />
            <Tiles title="AI" />
            <Tiles title="Machine Learning" />
          </div>
          <div className="coursesenroll">
            <div className="fler">
              Referral Amount <p className="amount"> $300</p>
            </div>
          </div>
        </div>
      </>{" "}
    </div>
  );
};

export default Cards;
