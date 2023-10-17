import { ADD_ACTIVITY, GET_ALL_COUNTRY, GET_BY_NAME_COUNTRY, RESET_DETAIL_COUNTRY, DETAIL_COUNTRY, LOADING} from "./actions-types";


const initialState={
    allCountry:[],
    allCountryCopy:[],
    detailCountry: null,
    allActivity: [],
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
        case DETAIL_COUNTRY:
            return {
                ...state,
                detailCountry:action.payload,
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
            allActivity:[
                ...state.addActivity,
                action.payload
            ]
        };
        case LOADING:
            return{
                ...state,
                loading:action.payload
            }



        default:{
          return  state;
        }
          

    }

}

export default reducer;