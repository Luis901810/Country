import { ADD_ACTIVITY, GET_ALL_COUNTRY, GET_BY_NAME_COUNTRY, RESET_DETAIL_COUNTRY} from "./actions-types";


const initialState={
    allCountry:[],
    allCountryCopy:[],
    detailCountry: null,
    addActivity: [],
    loading : true,
}

function reducer(state=initialState, action){

    switch(action.type) {

        case GET_ALL_COUNTRY:

            return{
                ...state,
                allCountry: action.payload,
                allCountryCopy: action.payload,
                loading: false,

            };
        case GET_BY_NAME_COUNTRY:

            return{
                ...state, 
                allCountry: action.payload,
                loading: false,

            }
        case RESET_DETAIL_COUNTRY:
            return{
                ...state,
                detailCountry:{},
            }
        case ADD_ACTIVITY:
            
        return{
            ...state,
            addActivity:[
                ...state.addActivity,
                action.payload
            ]
        };



        default:{
          return  state;
        }
          

    }

}

export default reducer;