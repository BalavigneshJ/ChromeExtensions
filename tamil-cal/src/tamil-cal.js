import React from "react" ;
import DayPickerInput from "react-day-picker/DayPickerInput" ;
import './daypicker.css' ;

class Cal extends React.Component {

  constructor(props) {
    super(props);
    let str = this.parseDate() ;
    this.state = { calender: "https://www.tamildailycalendar.com/"+str+".jpg"};
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  parseDate(d){
    d = d ? d : new Date() ;
    let date = d.getDate() ;
    let month = d.getMonth() + 1 ;
    month = (month < 10) ? "0"+month : month ;
    let year = d.getFullYear() ;
    let str = year + "/" + date + "" + month + "" + year ; 
    return str ;
  }

  handleDayChange(val){
    let d = new Date(val) ;
    let str = this.parseDate(d);
    this.setState({calender : "https://www.tamildailycalendar.com/"+str+".jpg"});
  }

  render(){
    return (
      <div className="Cal">
          <DayPickerInput
            onDayChange={this.handleDayChange}
          />
          <img src={this.state.calender} />
      </div>
    );
  }
}

export default Cal;
