import React from 'react'

function DisplayInfo() {
  return (
    <section className='display-infos'>
        <div className='info'>
            <h2 className='info-heading'>ip address</h2>
            <p className='info-content'>192.212.174.101</p>
        </div>
        <div className='info'>
            <h2 className='info-heading'>Location</h2>
            <p className='info-content'>brooklyn,ny 10001</p>
        </div>
        <div className='info'>
            <h2 className='info-heading'>timezone</h2>
            <p className='info-content'>UTC -05:00</p>
        </div>
        <div className='info'>
            <h2 className='info-heading'>isp</h2>
            <p className='info-content'>SpaceX Starlink</p>
        </div>
    </section>
  )
}

export default DisplayInfo