import React from 'react'
import '../../css/General/PageHeader.css'

function PageHeader(prop) {
    const text = (typeof prop.text === 'undefined') ? '' : prop.text;

    return (
        <div className="page-header">
            <div className="container">
                <div className="page-header__inner">
                    <p className="page-header__title">{text}</p>
                    <p className="page-header_subtitle">{'Home / ' + text}</p>
                </div>
            </div>
        </div>
    );
}

export default PageHeader