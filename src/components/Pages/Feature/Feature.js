import React from 'react'
import '../../../css/Pages/Feature.css'
import PageHeader from "../../General/PageHeader";
import News from "./News";

function Feature() {
    return (
        <div className="feature">
            <PageHeader text='Portfolio' />
            <News />
        </div>
    );
}


export default Feature;