import React from "react";
import ArrowUL from "./ArrowUL";
import Skills from "./Skills";
import ClientMessage from "./ClientMessage";
import BrowserImage from '../../../../img/Browser_images.png'

function AboutSection() {
    return (
        <div className="about-section section">
            <div className="about-section__wrapper">
                <div className="about-section__inner1">
                    <div className="container">
                        <h2 className="about-section__title">WHY MODUS VERSUS?</h2>
                        <p className="about-section__text">Capacitance cascading integer reflective interface data development high bus cache dithering transponder.</p>
                        <img src={BrowserImage} alt="" className="about-section__image"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="about-section__inner2">
                    <ArrowUL
                        title='Why Choose Us ?'
                        items={[
                            'Quisque at massa ipsum',
                            'Maecenas a lorem augue, egestas',
                            'Cras vitae felis at lacus eleifend',
                            'Etiam auctor diam pellentesque',
                            'Nulla ac massa at dolor',
                            'Condimentum eleifend vitae vitae',
                        ]}
                    />
                    <Skills />
                    <ClientMessage />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;