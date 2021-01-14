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

  const className = `date ${
    props.date.getMonth() === props.month ? "bold" : "soft"
  } 
        ${props.selected ? " selected" : ""};
        ${props.superselected ? " super-selected" : ""}`;
  return (
    <div
      onClick={selectDate}
      date={props.date}
      selected={false}
      superselected={false}
      className={className}
      key={props.date.toDateString()}
    >
     <span>
        {props.date.getDate()}
      </span> 
    </div>
  );
}

export default Day;
