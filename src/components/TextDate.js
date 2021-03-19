import React from 'react';

class TextDate extends React.Component {
    
    render(){
        return(
            <div className="date">{this.props.dayWeek}, {this.props.month} {this.props.numberDay}</div>
        )
    }
}

export default TextDate;