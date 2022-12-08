import React from 'react'
import Button from "../../General/Button";

function IntroSection() {
    return (
        <div className="intro-section section">
            <div className="container">
                <div className="intro-section-inner">
                    <div className="wrapper">
                        <h3 className="intro-section__title">Some of our top services</h3>
                        <p className="intro-section__text">Ut eleifend libero sed neque rhoncus consequat. Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.</p>
                    </div>
                    <Button text='view more'/>
                </div>
            </div>
        </div>
    );
}

export default IntroSection;