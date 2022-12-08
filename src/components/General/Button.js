import React from 'react'
import '../../css/Button.css'

function Button(prop) {
    return (
        <a onClick={(event) => event.preventDefault()} href="/" className='button'>{prop.text}</a>
    );
}

export default Button;