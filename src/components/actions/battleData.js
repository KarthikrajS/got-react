import api from './api';
//import battleData from "../../reducers/battleData";


export const battleDataList = () =>() => api.battleData.battleDataList().then(data=>  data.results.locations )
export const battleDataCount = (location) =>() => api.battleData.battleDataCount(location).then(data=>  data.results.count )
export const battleBasedOnLocation =(location)=> () => api.battleData.battleBasedOnLocation(location).then(data=> data.results.battles)
