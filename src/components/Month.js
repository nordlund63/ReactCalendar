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
          date: new Date(date),
          selected: false,
          superselected: false
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

    onNewSelectedDay = (e) => {
        console.log(e);
        const days = this.state.days;
        const superselectedDays = days.filter(e => e.superselected === true);
        
        if(superselectedDays.length === 0){
            days.find(i => i.date === e.date).superselected = !e.true;
        }
        else if(superselectedDays.length === 1 && e.date !== superselectedDays[0].date){
            days.find(i => i.date === e.date).superselected = true;
        }
        else{
            days.forEach(i => {
                i.selected = false;
                i.superselected = false;
            });
            days.find(i => i.date === e.date).superselected = true;
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
            superselected={obj.superselected}
            date={obj.date} 
            month={this.props.month}
            key={obj.date} />);
        
        return (
            <div className="month">
            <span className="date">
                Sun
            </span>
            <span className="date">
                Mon
            </span>
            <span className="date">
                Tues
            </span>
            <span className="date">
                Wed
            </span>
            <span className="date">
                Thurs
            </span>
            <span className="date">
                Fri
            </span>
            <span className="date">
                Sat
            </span>
            {lst}
        </div>
    );
    }
} 

export default Month;