import React from 'react';

class HelloStranger extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date(),
                      name: props.name};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return <h1>Hello {this.state.name}! Its {this.state.date.toLocaleTimeString()}</h1>;
    }
}

export default HelloStranger;