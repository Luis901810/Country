// --- dependencias-----//

import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//------actions----//
import { getAllCountry, orderByName, orderByContinent, sortByPopulation, filterByActivities } from "../../redux/actions";

   

// componentes functional

import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination"
import Loading from "../../components/Loading/Loading";
import styles from "./Home.module.css"

const Home = () =>{

    const dispatch = useDispatch();
    const allCountry = useSelector((state) => state.allCountry);
    const allActivities = useSelector((state) => state.allActivities)
    console.log("todas las actividades", allActivities)
    
    const loading = useSelector((state) => state.loading);
    
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [order, setOrder ] = useState("")
    const [ currentPage, setCurrentPage] = useState(1)
    const countryPerPage = 10;

    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage ;

    const countryMatchingFilter = allCountry.filter((country) => country )
    const currentcountry = countryMatchingFilter.slice(indexOfFirstCountry, indexOfLastCountry)


    let filteredActivities = allActivities.filter((country) =>{
    return country.Activities && country.Activities[0] !== undefined;
       
    });

    let aviableActivities = filteredActivities?.map((country) => country.Activities[0]["name"]);
    let noRepeatedActivities = aviableActivities.filter((activity, index) =>{
        return aviableActivities.indexOf(activity) === index;
    })
    

    useEffect(() =>{
        dispatch(getAllCountry())
    }, [dispatch])

         // filtrar por nombre
         const handlerFilterByName = (event) =>{
            const selectedValue = event.target.value;
            dispatch(orderByName(selectedValue));
            setCurrentPage(1);
            setOrder("")
            setCurrentIndex(0)
            
        }

        const handlerFilterContinent = (event) =>{

            const selectedValue = event.target.value;
            dispatch(orderByContinent(selectedValue));
            setCurrentPage(1);
            setOrder("");
            setCurrentIndex(0)   
        }

// ordenar por poblacion
        const handlerByPopulation = (event)=>{

            const selectedValue = event.target.value;
            dispatch(sortByPopulation(selectedValue))
            setCurrentPage(1);
            setOrder("")
            setCurrentIndex(0)
        }
        const handlerFilterActivity = (event) =>{
            const selectedValue = event.target.value;

            console.log('Valor del selector de actividades:', selectedValue);
            dispatch(filterByActivities(selectedValue));
            setCurrentPage(1);
            setOrder("")
            setCurrentIndex(0)
        }


        // manejo de reinicion de los filtros
        const handleClick = () =>{
            dispatch(getAllCountry());
            setCurrentPage(1);
            setOrder("");
            setCurrentIndex(0)
        }


    return(
        <div className={styles.container}>
        {loading && <Loading />}
        <NavBar setCurrentPage={setCurrentPage} setCurrentIndex={setCurrentIndex} />
        
        <div className={styles.section_home}>
            <div>
                <select className={styles.input} onChange={handlerFilterByName}>
                    <option className={styles.option} value="">Ordenar</option>
                    <option className={styles.option} value="A-Z">⇑ A-Z</option>
                    <option className={styles.option} value="Z-A">⇓ Z-A</option>
                </select>
                {order && <p className={styles.order}>{order}</p>}
            </div>

            <div>
                <select className={styles.input} onChange={handlerByPopulation}>
                    <option className={styles.option} value="">Poblacion</option>
                    <option className={styles.option} value="ascendente">⇑ Ascendente</option>
                    <option className={styles.option} value="descendente">⇓ Descendente</option>
                </select>
                {order && <p className={styles.order}>{order}</p>}
            </div>
           
            <div>
                <select className={styles.input} onChange={handlerFilterContinent}>
                    <option className={styles.option} value="all">Continentes</option>
                    <option className={styles.option} value="Africa">Africa</option>
                    <option className={styles.option} value="Asia">Asia</option>
                    <option className={styles.option} value="Europe">Europa</option>
                    <option className={styles.option} value="North America">North America</option>
                    <option className={styles.option} value="South America">South America</option>
                    <option className={styles.option} value="Antarctica">Antarctica</option>
                    <option className={styles.option} value="Oceania">Oceania</option>
                </select>
                {order && <p className={styles.order}>{order}</p>}
            </div>

            <div>
                <select className={styles.input} onChange={handlerFilterActivity}>
                    <option className={styles.option} value="" >Actividad</option>
                    {noRepeatedActivities?.map((activity, index) => {
                        return(
                            <option value={activity} key={index}>{activity}</option> 
                        )
                    })}
                </select>
            </div>
    
            <div>
                <button className={styles.input} onClick={handleClick}>Reiniciar</button>
            </div>
        </div>
    
        {allCountry.length ? (
            <div>
                <Cards countries={currentcountry} />
                <Pagination
                    numberOfCountry={allCountry.length}
                    currentPage={currentPage}
                    countryForPage={countryPerPage}
                    setCurrentPage={setCurrentPage}
                    index={currentIndex}
                    setIndex={setCurrentIndex}
                />
            </div>
        ) : (
            <div>
                <Loading />
            </div>
        )}
    </div>
    )}
    
export default Home;