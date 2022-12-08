import React from 'react'
import JQueryImage from '../../img/Jquery.png'
import '../../css/General/Client.css'
import Button from "./Button";

function Clients() {
    let items = [];
    for (let i = 0; i < 6; i++) {
        items.push(<img src={JQueryImage} className='slider__item' alt='' key={i} />)
    }

    return (
        <div className="slider">
            <div className="slider__header">
                <h3 className="slider__title">Our Happy Clients</h3>
                <div className="slider__hr" />
                <div className="slider__buttons">
                    <Button className='slider__button slider__button_left'/>
                    <Button className='slider__button' />
                </div>
            </div>
            <div className="slider__items">
                {items}
            </div>
        </div>
    );
}

export default Clients;