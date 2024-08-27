import React from 'react'
import useGeoStore from '../store/geoStore'

function DisplayInfo() {

    const {ip,location,timeZone,isp} = useGeoStore(state=>state.geoInfos)
  return (
    <section className='display-infos'>
        <div className='info'>
            <h2 className='info-heading'>ip address</h2>
            <p className='info-content'>{ip}</p>
        </div>
        <div className='info'>
            <h2 className='info-heading'>Location</h2>
            <p className='info-content'>{location}</p>
        </div>
        <div className='info'>
            <h2 className='info-heading'>timezone</h2>
            <p className='info-content'>{timeZone}</p>
        </div>
        <div className='info'>
            <h2 className='info-heading'>isp</h2>
            <p className='info-content'>{isp}</p>
        </div>
    </section>
  )
}

export default DisplayInfo