import React from "react";
import SkillsImg from '../../../../img/Skills.png'

function Skills() {
    return (
        <div className="skills">
            <p className="skills__text">Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque lectus vehicula mattis. Nulla ac massa at dolor condimentum eleifend vitae vitae urna.</p>
            <img src={SkillsImg} alt="" className="skills__img"/>
        </div>
    );
}

export default Skills