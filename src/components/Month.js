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
        const days = this.state.days;
        const superselectedDays = days.filter(e => e.superselected === true);
        
        if(superselectedDays.length === 0){
            days.find(i => i.date === e.date).superselected = true;
        }
        else if(superselectedDays.length === 1 && e.date !== superselectedDays[0].date){
            days.find(i => i.date === e.date).superselected = true;
            days.find(i => i.date === e.date).firstDaySuperSelected = false;

            const maxDay = new Date(Math.max.apply(null, days.filter(e => e.superselected === true).map(e => e.date)));
            const minDay = new Date(Math.min.apply(null, days.filter(e => e.superselected === true).map(e => e.date)));
            
            days.filter(i => i.date < maxDay && i.date > minDay).forEach(k => k.selected = true);
            days.find(i => i.date === minDay).firstDaySuperSelected = true;
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
            key={obj.date} 
            firstDaySuperSelected={false}
            />);
        
        return (
            <div className="month">
            <span className="date-container">
                Sun
            </span>
            <span className="date-container">
                Mon
            </span>
            <span className="date-container">
                Tues
            </span>
            <span className="date-container">
                Wed
            </span>
            <span className="date-container">
                Thurs
            </span>
            <span className="date-container">
                Fri
            </span>
            <span className="date-container">
                Sat
            </span>
            {lst}
        </div>
    );
    }
} 

export default Month;