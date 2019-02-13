import React, { Component } from 'react';
import s from '../../src/App.module.css';
import dataConference from '../../src/data-conference.json';
import Event from './Event';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.data = dataConference;
        this.id = 1;
        console.log(this.data);
    };
    render() {
        let id = this.id;
        let events = this.data.map((item) => {
            return <Event
                name={item.name}
                key={`${this.id++}`}
                // id={`${id++}`}
                city={item.city}
                country={item.country}
                startDate={item.startDate}
                addPrompt={this.addPrompt}
            />
        })
        return (
            <div className={s.wrapperCalendar}>
                {events}
            </div>
        )
    }
    addPrompt(e){
        if( e.target.dataset.day=3){
            console.log('3'); 
        }
        if( e.target.dataset.day=7){
            console.log('7'); 
        }
        else{
            console.log('14');
        }
        
    }
}
export default Calendar;