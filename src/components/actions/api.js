import axios from 'axios';

export default{
    battleData:{
        battleDataList:()=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/list").then(res => res.data),
        battleKingsList:()=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/kings").then(res => res.data),
        battleTypesList:()=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/types").then(res => res.data),
        battleDataCount:data=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/count",{data}).then(res => res.data),
        battleBasedOnLocation:location=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/battleBasedOnLocation",{location}).then(res => res.data),
        battleBasedOnTypes: type=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/battleBasedOnTypes",{type}).then(res => res.data),
        battleBasedOnKings: king=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/battleBasedOnKings",{king}).then(res => res.data),
        battleDetails: battleName=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/battleDetails",{battleName}).then(res => res.data),
        search:data=>
            axios.post("https://career-ninja-got.herokuapp.com/api/battleData/search",{data}).then(res=>res.data)
    }
}