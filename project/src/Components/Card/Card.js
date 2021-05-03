import React from 'react';
import './Card.css';
import Info from "../Info"
import Buttons from "../Buttons"

const Card = ({user}) => {
    return (
        <div className="col-3">
            <div className="card">
                <div className="row">
                   <div className="col-10">
                        <Info user={user}/>
                   </div>
                    <div className="col-2">
                      <Buttons/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;

