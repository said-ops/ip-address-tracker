import React from 'react'

function IpForm() {
  return (
    <>
        <header>
            <h1>IP Address Tracker</h1>
           <form id='geo-form'>
            <input 
                type="text"
                name="ipInput"
                placeholder='Search for any IP address or domain' 
            />
            <button type='submit'></button>
           </form>
        </header>
    </>
  )
}

export default IpForm