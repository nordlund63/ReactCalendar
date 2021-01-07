import React from 'react';
import Month from './Month';

class Calendar extends React.Component{
    constructor(props){
        super(props);

        this.state = {selectedDate: null}
    }

    render(){
        const selectedDate = this.state.selectedDate;
        return (
            <div>
                <Month month={11} year={2020} />
                <div>
                    {selectedDate !== null ? selectedDate.toLocaleDateString('en-US') : ''}
                </div>
            </div>
        );
    }
}

export default Calendar;