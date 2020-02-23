import piggy from "../porco.png";
import React from "react";
import Button from "./Button"

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <p></p>
      
      <Button greaseClick={props.greaseClick} sortedClick={props.sortClick}/>
    </div>
  );
};

export default Nav;
