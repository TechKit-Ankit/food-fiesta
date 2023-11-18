import React, { useEffect, useState } from 'react'
import Card from './Card'

function Content() {
    console.log("Content rendered");
    const [swiggydata, setswiggydata] = useState([]);
    const [input, setinput] = useState("");
    const [renderedData, setRenderedData] = useState([])
    console.log("renderedData", renderedData);
    console.log("swiggydata", swiggydata);

    const inputHandeler = (e) => {
        setinput(e.target.value)
    }

    // function to handle search
    const searchHandeler = () => {
        // log input to the console
        console.log("input:", input);

        // filter data based on search input
        const filterdata = swiggydata.filter((item) => {
            // check if the name of the restaurant includes the search input
            return item.info.name.toLowerCase().includes(input.toLowerCase());
        })

        // if no results found, set renderedData to null
        filterdata.length === 0 ? setRenderedData(null) :
            // otherwise, set the renderedData to the filtered data
            setRenderedData(filterdata);
        console.log("filterdata", filterdata);
    }
    useEffect(() => {
        // 1. Call the function to fetch the data
        getRestaurantList();
        // 2. Add a console.log statement to check if useEffect is working
        console.log("useEffect swiggydata");
    }, [])


    async function getRestaurantList() {
        // 1. Fetch data from swiggy API
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const apidata = await response.json();
        // 2. Extract required data from API response
        const newSwiggyData = apidata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        // 3. Update state variables with data
        setswiggydata(newSwiggyData);
        setRenderedData(newSwiggyData);
    }
    // if (swiggydata) {
    //     console.log("swiggydata", swiggydata);
    // }


    return (
        <>
            <div className="searchfield">
                <input type="text" name="" id="" value={input} onChange={inputHandeler} />
                <button onClick={searchHandeler}>search</button>
            </div>
            {!renderedData ? <h1>No data</h1> : renderedData?.length === 0 ? <h1>Loding...</h1> : <div className="cardList">
                {renderedData.map((item) => {
                    return (
                        <Card
                            {...item.info}
                            key={item.info.id}
                        />
                    )
                })}
            </div>}
        </>
    )
}

export default Content