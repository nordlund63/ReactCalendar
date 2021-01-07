import "./Day.css";

import React from "react";

function Day(props) {
  function selectDate() {
    if (props.day.getMonth() !== props.month) {
      return null;
    }

    props.onDaySelected({
      selected: props.selected,
      day: props.day,
    });
  }

  const className = `day ${
    props.day.getMonth() === props.month ? "bold" : "soft"
  } 
        ${props.selected ? "selected" : ""}`;
  return (
    <span
      onClick={selectDate}
      day={props.day}
      selected={false}
      className={className}
      key={props.day.toDateString()}
    >
      {props.day.getDate()}
    </span>
  );
}

export default Day;
