import React from 'react'
import '../../../css/General/Sections/SecondSection.css'

function SecondSection(props) {
    return (
        <div className="second-section">
            <div className="container">
                <h3 className="second-section__title">{props.title}</h3>
                <div className="second-section__inner">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default SecondSection;