import "./Day.css";

import React from "react";

function Day(props) {
  function selectDate() {
    if (props.date.getMonth() !== props.month) {
      return null;
    }

    props.onDaySelected({
      superselected: props.superselected,
      date: props.date,
    });
  }

  const className = `day-text ${
    props.date.getMonth() === props.month ? "bold" : "soft"
  }`;

  const contentContainer = `selection-container ${props.selected ? " selected" : ""}
                         ${props.superselected ? " super-selected" : ""}`;

  let backgroundContainer = "date-container";
  if(props.superselected){
    if(props.firstDaySuperSelected){
      console.log("thing");
      backgroundContainer = "date-container super-selected-background-first";
    }
    else if(props.lastDaySuperSelected){
      backgroundContainer = "date-container super-selected-background-last";
    }
  }

  return (
    <div className={backgroundContainer}>
      <div
      onClick={selectDate}
      date={props.date}
      selected={false}
      superselected={false}
      className={contentContainer}
      key={props.date.toDateString()}
      >
        <span className={className}>
            {props.date.getDate()}
          </span> 
      </div>
    </div>
  );
}

export default Day;
