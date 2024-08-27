import React, { useLayoutEffect, useState } from 'react'
import useGeoStore from '../store/geoStore'

function IpForm() {

  const [text,setText] = useState('')
  const getGeoInfos = useGeoStore(state=>state.getGeoInfos)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(e.target.value !==''){
      getGeoInfos(text)
    }
  }
useLayoutEffect(()=>{
  getGeoInfos('')
},[])
  return (
    <>
        <header>
            <h1>IP Address Tracker</h1>
           <form 
            id='geo-form'
            onSubmit={e=>handleSubmit(e)}
            >
              <input 
                  type="text"
                  name="ipInput"
                  placeholder='Search for any IP address or domain'
                  value={text || ''} 
                  onChange={e=>setText(e.target.value)}
              />
              <button type='submit'
                
              ></button>
           </form>
        </header>
    </>
  )
}

export default IpForm