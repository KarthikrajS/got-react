import axios from 'axios';

export default{
    battleData:{
        battleDataList:()=>
            axios.post("/api/battleData/list").then(res => res.data),
        battleDataCount:location=>
            axios.post("/api/battleData/count",{location}).then(res => res.data),
        battleBasedOnLocation:location=>
            axios.post("/api/battleData/battleBasedOnLocation",{location}).then(res => res.data)
    }
}