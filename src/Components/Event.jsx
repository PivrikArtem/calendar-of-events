import React from 'react';
import s from '../../src/App.module.css';

const Event = (props) => {
    return (
        <div className={s.event}>
            <span className={s.startDate}>{props.startDate}</span>
            <span className={s.name}>{props.name}</span>
            <span>{props.city}{', '}{props.country}</span>
            <select onChange={props.addPrompt} className='menu'>
                <option data-day={3} >3</option>
                <option data-day={7}>7</option>
                <option data-day={14} selected='selected'>14</option>
            </select>
        </div>
    );
}

export default Event;