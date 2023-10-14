import { GET_ALL_COUNTRY} from "./actions-types";


const initialState={
    allCountry:[],
    allCountryCopy:[],
}

function reducer(state=initialState, action){

    switch(action.type) {

        case GET_ALL_COUNTRY:
            return{
                ...state,
                allCountry: action.payload,
                allCountryCopy: action.payload,

            };
        default:{
          return  state;
        }
          

    }

}

export default reducer;