import { create } from "zustand";

const initialState = {
    ip:'192.212.174.101',
    location:'brooklyn,ny 10001',
    timeZone:'UTC -05:00',
    isp:'SpaceX Starlink',
    lat:'34.06138',
    long:'-118.08164'
}
// const initialState = {
//     ip:'',
//     location:'',
//     timeZone:'',
//     isp:'',
//     long:'',
//     lat:''
// }
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
                isp:data.company.name,
                long:data.location.longitude,
                lat:data.location.latitude,
            }})
            console.log(useGeoStore.getState().geoInfos.long)
            console.log(useGeoStore.getState().geoInfos.lat)
        })
        .catch(err=>{
            alert(err)
        })
    }
}))
export default useGeoStore