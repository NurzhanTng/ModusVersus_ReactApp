import React from "react";
import '../../css/General/ClientMessage.css'

function ClientMessage() {
    return (
        <div className="client-message">
            <h3 className="client-message__title">What Client's Say?</h3>
            <p className="client-message__text">Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque lectus vehicula mattis. Nulla ac massa at dolor condimentum eleifend vitae vitae urna.</p>
            <p className="client-message__author">Jhon Doe</p>
        </div>
    );
}

export default ClientMessage