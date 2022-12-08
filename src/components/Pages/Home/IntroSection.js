import React from 'react'
import Button from "../../Button/Button";

function TopServiceSection() {
    return (
        <div className="top-service-section">
            <h3 className="top-service-section__title">Some of our top services</h3>
            <p className="top-service-section__text">Ut eleifend libero sed neque rhoncus consequat. Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.</p>
            <Button text='view more'/>
        </div>
    );
}

export default TopServiceSection;