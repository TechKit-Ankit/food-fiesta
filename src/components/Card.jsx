import React from 'react'
import { IMG_CDN_URL } from './Api'

function Card({ name, cloudinaryImageId, cuisines, sla: { deliveryTime } }) {
    // console.log(cloudinaryImageId);
    return (
        <>
            <div className="card">
                <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{cuisines.join(",")}</p>
                    <p className="card-text">{deliveryTime} min</p>
                </div>
            </div>
        </>
    )
}

export default Card; 