import React from 'react'
import LocationCyclone from './LocationCyclone'
import LocationFire from './LocationFire'
import LocationVolcano from './LocationVolcano'

const FilterBox = () => {
    return (
        <div className="filterBox">
            <h3>Filter View</h3>
            <div className="filterDiv fire">
                <input className="filterButton" type="checkbox" id="wildfire" value="wildfire"/>
                <label htmlFor="wildfire">Wildfire</label>
                <LocationFire className="icon"/>
            </div>
            <br/>
            <div className="filterDiv cyclone">
                <input className="filterButton" type="checkbox" id="severe-storm" value="severe-storm"/>
                <label htmlFor="severe-storm">Severe Storm</label>
                <LocationCyclone className="icon"/>
            </div>
            <br/>
            <div className="filterDiv volcano">
                <input className="filterButton" type="checkbox" id="volcano" value="volcano"/>
                <label htmlFor="volcano">Volcano</label>
                <LocationVolcano className="icon"/>
            </div>
         </div>
    )
}

export default FilterBox
