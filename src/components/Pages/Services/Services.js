import React from 'react'
import '../../../css/Pages/Services.css'
import PageHeader from "../../General/PageHeader";
import FirstSection from "../../General/Sections/FirstSection";
import ArrowUL from "../../General/ArrowUL";
import Skills from "../../General/Skills";
import ThirdSection from "../../General/Sections/ThirdSection";
import SecondSection from "../../General/Sections/SecondSection";

function Services() {
    return (
        <div className="services">
            <PageHeader text='Services' />
            <FirstSection
                title='Faucibus ultricies congue'
                text='Maecenas eget turpis turpis. Nunc vel metus augue. Aenean euismod cursus ligula eget dapibus. Praesent vel erat in tortor placerat dignissim. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
            >
                <ArrowUL
                    className='arrow-ul_service'
                    title='Planning'
                    items={[
                        'Quisque at massa ipsum',
                        'Maecenas a lorem augue, egestas',
                        'Cras vitae felis at lacus eleifend',
                        'Etiam auctor diam pellentesque',
                        'Nulla ac massa at dolor',
                        'Condimentum eleifend vitae vitae',
                    ]}
                />
                <ArrowUL
                    className='arrow-ul_service'
                    title='Development'
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
            </FirstSection>
            <SecondSection title='Pricing Table'>
                <div className="items">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
            </SecondSection>
            <ThirdSection />
        </div>
    );
}

export default Services;