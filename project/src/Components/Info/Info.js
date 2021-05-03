import React from 'react';
import './Info.css';


const Info = ({user}) => {
    return (
        <div className="row">
            <div className="col-6 text-center">
                <img  src={user.image} className="img" alt="Avatar" />
            </div>
            <div className="col-6 ">
                <div className="info">
                <h3>{user.name}</h3>
                <span>{user.address}</span>
                <span>{user.phone}</span>
                <span>{user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default Info;

