import React from "react";
import ArrowIcon from '../../../../img/ArrowIcon.png'

function ArrowUL(props) {
    let items = []
    for (let i = 0; i < props.items.length; i++) {
        items.push(
            <li className='arrow-ul__li' key={i}>
                <img src={ArrowIcon} alt="" className="arrow-ul__icon"/>
                {props.items[i]}
            </li>
        )
    }


    return (
        <div className='arrow-ul' >
            <h3 className="arrow-ul__title">{props.title}</h3>
            <ul className="arrow-ul__ul">
                {items}
            </ul>
        </div>
    );
}

export default ArrowUL