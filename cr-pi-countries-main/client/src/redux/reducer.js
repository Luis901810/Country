import { ADD_ACTIVITY, GET_ALL_COUNTRY, GET_BY_NAME_COUNTRY, RESET_DETAIL_COUNTRY, ORDER_BY_CONTINENT, DETAIL_COUNTRY, LOADING, ORDER_BY_NAME} from "./actions-types";


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
                allCountryCopy: action.payload,
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
                ...state.allActivity,
                action.payload
            ]
        };
        case LOADING:
            return{
                ...state,
                loading:action.payload
            }
        case ORDER_BY_NAME:
            let sortedCountry = [];
            if(action.payload === "A-Z"){
                sortedCountry = state.allCountry.slice().sort((a, b) =>{
                    return a.name.localeCompare(b.name)
                });
            }else if( action.payload === "Z-A"){
                sortedCountry = state.allCountry.slice().sort((a, b) =>{
                    return b.name.localeCompare(a.name);
            });
            }
            return{
                ...state,
                allCountry:sortedCountry
            }
        case ORDER_BY_CONTINENT:

            if(action.payload){
               
                let continent;
                if(action.payload === "all"){
                    continent=state.allCountryCopy;
                }else{
                    continent = state.allCountryCopy.filter((country) => country.continent === action.payload )
                }
                return{
                    ...state,
                    allCountry: continent,
                };
            }
            return state
           

        default:

        return state
        ;
    };

};

export default reducer;