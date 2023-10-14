import axios from "axios";

import { GET_ALL_COUNTRY,ADD_ACTIVITY, URLCOUNTRYS} from "./actions-types";

export const getAllCountry = () =>{
    
        return async function (dispatch){
        try{

        const response = await axios(`${URLCOUNTRYS}`);
        return dispatch({
            type: GET_ALL_COUNTRY,
            payload:response.data
        })

        }catch (error){
            throw error

        }
    }
}
// export const addActivity (dispatch){

//     const response = await  axios.post()
//     type:ADD_ACTIVITY,
// }