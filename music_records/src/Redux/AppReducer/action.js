import axios from "axios"
import { GET_MUSIC_RECORD_FAILURE, GET_MUSIC_RECORD_REQUEST, GET_MUSIC_RECORD_SUCCESS } from "./action.type"




export const getMusicRecord =(params)=>(dispatch)=>{
  //  console.log("params",params)
    dispatch({type:GET_MUSIC_RECORD_REQUEST})
    return axios.get("http://localhost:8080/albums",params).then((r)=>{
         //console.log("data",r.data)
        return dispatch({type:GET_MUSIC_RECORD_SUCCESS,payload:r.data})
    }).catch((er)=>{
        return dispatch({type:GET_MUSIC_RECORD_FAILURE})
    })
}