import React from 'react'
import '../../css/General/FirstSection.css'

function FirstSection(props) {
    return (
        <div className="first-screen">
            <div className="container">
                <div className="first-screen__inner1">
                    <h3 className="first-screen__title">{props.title}</h3>
                    <p className="first-screen__text">{props.text}</p>
                </div>
                <div className="first-screen__inner2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default FirstSection;