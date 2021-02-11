import { Icon, InlineIcon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/noto-v1/volcano';


const LocationVolcano = ({lat, lng, onClick}) => {
    return (
        <div className='location-marker' onClick={onClick}>
            <Icon icon={volcanoIcon} className='location-icon'/>
        </div>
    )
}

export default LocationVolcano
