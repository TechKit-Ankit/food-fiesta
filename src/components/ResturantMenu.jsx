import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from './Api';
function ResturantMenu() {
    const [resturantInfo, setResturantInfo] = useState([])
    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        getResturantInfo();
    }, [])
    async function getResturantInfo() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + id);
        const data = await response.json();
        const MenuInfo = data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

        setResturantInfo(MenuInfo);
        // console.log("MenuInfo", MenuInfo);
    }
    // console.log("resturantInfo", resturantInfo);
    return (
        <>
            <h1>ResturantMenu{id}</h1>
            <div className='cardList'>
                {resturantInfo.length === 0 ? <h1>Loading...</h1> :
                    resturantInfo.map((item) => {
                        return (
                            <>
                                <div className="card">
                                    <div className="card-img">
                                        <img src={IMG_CDN_URL + item.card.info.imageId} alt="" />
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title">
                                            <h2>{item.card.info.name}</h2>
                                        </div>
                                        <div className="card-desc">
                                            <p>{item.card.info.description}</p>
                                        </div>
                                        <div className="card-price">
                                            <p>{item.card.info.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </div>
        </>
    )
}

export default ResturantMenu