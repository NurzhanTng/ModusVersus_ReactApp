import React from 'react'
import '../../css/General/Button.css'

function Button(props) {
    const className = (typeof props.className === 'undefined') ? '' : ' ' + props.className;

    return (
        <a
            onClick={(event) => event.preventDefault()}
            href="/new-app/src/components/Pages"
            className={'button' + className}
        >
            {props.text}
        </a>
    );
}

export default Button;