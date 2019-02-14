import React, { Component } from 'react';
import s from '../../src/App.module.css';
import dataConference from '../../src/data-conference.json';
import Event from './Event';
import { spawnNotification } from '../../src/notifications '

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.data = dataConference;
        this.id = 1;
    };
    render() {
        let events = this.data.map((item) => {
            return <Event
                name={item.name}
                key={`${this.id++}`}
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
    addPrompt(e) {
        let notification = spawnNotification();
        switch (e.target.value) {

            case '3': console.log('3');

                notification.setTime(3);
                break;
            case '7': console.log('7');
                notification.setTime(7);
                break;
            case '14': console.log('14');
                notification.setTime(14);
                break;
            default: break;
        }
    }
}
export default Calendar;