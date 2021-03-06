import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'
import LocationFire from './LocationFire'
import LocationCyclone from './LocationCyclone'
import LocationVolcano from './LocationVolcano'
import FilterBox from './FilterBox'

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return  <LocationFire 
                        lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                        onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                    />
        }

        if(ev.categories[0].id === 10){
            return  <LocationCyclone 
                        lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                        onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                    />
        }

        // if(ev.categories[0].id === 12){
        //     return  <LocationVolcano
        //                 lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
        //                 onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
        //             />
        // }
        return null
    })

    return (
        <div className ='map'>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDyU8KcFoaRaKZ-4Wh_jZWgSL51-znHvGs'}}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
               {/*} <LocationMarker lat={center.lat} lng={center.lng}/>*/}
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
            <FilterBox />
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.409080,
        lng: -83.128890
    },
    zoom: 6
}

export default Map
