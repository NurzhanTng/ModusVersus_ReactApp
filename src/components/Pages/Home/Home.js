import React from 'react'
import '../../../css/Pages/Home.css'
import IntroSection from "./IntroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import Clients from "../../General/Clients";

function Home() {
    return (
        <div className='home'>

            <IntroSection />
            <ServicesSection />
            <AboutSection />

            <div className='clients-section'>
                <div className="container">
                    <Clients />
                </div>
            </div>
        </div>
    );
}

export default Home;