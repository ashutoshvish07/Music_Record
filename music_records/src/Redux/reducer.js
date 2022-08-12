import { GET_MUSIC_RECORD_FAILURE, GET_MUSIC_RECORD_REQUEST, GET_MUSIC_RECORD_SUCCESS } from "./action.type"


const init = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state=init,{type,payload})=>{
    switch(type){
      case GET_MUSIC_RECORD_REQUEST :return {
        ...state,
        isLoading:true,
        isError:false,
      }
      case GET_MUSIC_RECORD_SUCCESS :return {
        ...state,
        musicRecords:payload,
        isLoading:false,
        isError:false,
      }
      case GET_MUSIC_RECORD_FAILURE:return {
        ...state,
        isLoading:false,
        isError:true,
      }
        default :return state
    }
 }