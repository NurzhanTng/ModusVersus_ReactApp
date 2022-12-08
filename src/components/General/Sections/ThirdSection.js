import React from 'react'
import '../../../css/General/Sections/ClientSection.css'
import Clients from "../Clients";

function ClientsSection() {
    return (
        <div className="clients-section">
            <div className="container">
                <h3 className="clients-section__title">Best Solution is the simplest IDEA!</h3>
                <p className="clients-section__text">Capacitance cascading integer reflective interface data development high bus cache dithering transponder. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <div className="clients-section__inner">
                    <Clients />
                </div>
            </div>
        </div>
    );
}

export default ClientsSection;