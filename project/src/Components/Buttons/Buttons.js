import React from 'react'
import './Buttons.css';

const Buttons = () => {
    return (
    <div className="block text-center">
        <span ><i className="far fa-star yellow"></i></span>
        <span><i className="fa fa-pencil-square-o green" aria-hidden="true"></i></span>
        <span><i className="fa fa-trash red" aria-hidden="true"></i></span>
    </div>
    )
}

export default Buttons;