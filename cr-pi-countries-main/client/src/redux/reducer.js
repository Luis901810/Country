import { ADD_ACTIVITY, GET_ALL_COUNTRY, GET_BY_NAME_COUNTRY, ORDER_BY_POPULATION, RESET_DETAIL_COUNTRY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITIES, DETAIL_COUNTRY, LOADING, ORDER_BY_NAME} from "./actions-types";


const initialState={
    allCountry:[],
    allCountryCopy:[],
    detailCountry: null,
    allActivities: [],
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
                allActivities: action.payload,
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

        case FILTER_BY_CONTINENT:

        const continent = action.payload;
       
            if(continent){
                
                const filterContinent = state.allCountryCopy.filter(country => {
                    return country.continent.includes(continent);
                });
                                
                return{
                    ...state,
                    allCountry: filterContinent
                }
            }
            return{
                ...state,
            }
            case FILTER_BY_ACTIVITIES:
                const filterActivity = action.payload;
                console.log('Filtrando por actividad:', filterActivity);
                if (filterActivity) {
                    const filteredByActivities = state.allCountryCopy.filter(country => {
                        return country.activities?.includes(filterActivity);
                    });

                    console.log(" soy la actividad",filterActivity)
                    return {
                        ...state,
                        allCountry: filteredByActivities,
                    };
                } else {
                    return {
                        ...state,
                    };
                }
            


        case ORDER_BY_POPULATION:
            const sortedByPopulation = [
                ...state.allCountry].sort((a,b) => {

                if(action.payload === "ascendente"){

                    return a.population - b.population
                } else if(action.payload === "descendente"){
                    return b.population - a.population;
                }
                return 0;
            })
            return{
                ...state,
                allCountry: sortedByPopulation
            }
       



        default:

        return {
            ...state

        }
        
        ;
    };

};

export default reducer;