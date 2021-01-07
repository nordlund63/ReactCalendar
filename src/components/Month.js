import React from 'react';
import './Month.css';

import Day from './Day';

function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let upperLimitForDate = new Date(year, month + 1, 0);
    while(date.getDay() !== 0){
        date.setDate(date.getDate() - 1);
    }
    while(upperLimitForDate.getDay() !== 6){
        upperLimitForDate.setDate(upperLimitForDate.getDate() + 1);
    }
    let days = [];
    while (date <= upperLimitForDate) {
      days.push({
          day: new Date(date),
          selected: false
      });
      date.setDate(date.getDate() + 1);
    }
    return days;
}



class Month extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            days: getDaysInMonth(this.props.month, this.props.year)
        };
    }

    selectDate = (e) =>{
        console.log(e.target);
    }

    onNewSelectedDay = (e) => {
        console.log(e);
        const days = this.state.days;
        days.find(i => i.day === e.day).selected = !e.selected;
        
        const allSelectedDays = this.state.days.filter((day) => day.selected);
        if(allSelectedDays.length > 1){
            const maxDay = new Date(Math.max.apply(null, allSelectedDays.map(e => e.day)));
            const minDay = new Date(Math.min.apply(null, allSelectedDays.map(e => e.day)));
            if(maxDay > e.day && e.day > minDay){
                days.forEach(i => {
                    i.selected = false;
                });
                days.find(i => i.day === e.day).selected = e.selected;
            }
            else{
                days.forEach(i => {
                    if(maxDay > i.day && i.day > minDay){
                        i.selected = true;
                    }
                });
            }
        }

        this.setState({
            ...days
        });
    }

    render(){
        const lst = this.state.days.map((obj) => 
        <Day 
            onDaySelected={this.onNewSelectedDay}
            selected={obj.selected} 
            day={obj.day} 
            month={this.props.month}
            key={obj.day} />);
        
        return (
            <div className="month">
            <span className="day">
                Sun
            </span>
            <span className="day">
                Mon
            </span>
            <span className="day">
                Tues
            </span>
            <span className="day">
                Wed
            </span>
            <span className="day">
                Thurs
            </span>
            <span className="day">
                Fri
            </span>
            <span className="day">
                Sat
            </span>
            {lst}
        </div>
    );
    }
} 

export default Month;