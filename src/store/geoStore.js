import { create } from "zustand";

// const initialState = {
//     ip:'192.212.174.101',
//     location:'brooklyn,ny 10001',
//     timeZone:'UTC -05:00',
//     isp:'SpaceX Starlink'
// }
const initialState = {
    ip:'',
    location:'',
    timeZone:'',
    isp:''
}
const useGeoStore = create((set) => ({

    geoInfos : initialState,
    getGeoInfos : (text)=>{
        fetch(`https://api.ipregistry.co/${text}?key=gfbh9pgsmpy2nhjs`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            set({geoInfos : {
                ip:data.ip,
                location:data.location.region.name,
                timeZone:data.time_zone.name,
                isp:data.company.name
            }})
        })
        .catch(err=>{
            alert(err)
        })
    }
}))
export default useGeoStore