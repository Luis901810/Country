// --- dependencias-----//

import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//------actions----//
import { getAllCountry, orderByName, orderByContinent} from "../../redux/actions";

// componentes functional

import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination"
import Loading from "../../components/Loading/Loading";
import styles from "./Home.module.css"

const Home = () =>{

    const dispatch = useDispatch();
    const allCountry = useSelector((state) => state.allCountry);
    
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [order, setOrder ] = useState("")
    const [ currentPage, setCurrentPage] = useState(1)
    const countryPerPage = 10;

    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage ;

    const countryMatchingFilter = allCountry.filter((country) => country )
    const currentcountry = countryMatchingFilter.slice(indexOfFirstCountry, indexOfLastCountry)

   


    

  
    
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
            setOrder(`Ordenar por Nombre ${selectedValue}`)
        }

        const handlerFilterContinent = (event) =>{
            const selectedValue = event.target.value;

            dispatch(orderByContinent(selectedValue));
            setCurrentPage(1);
            setOrder("");
            setCurrentIndex(0)
            setOrder(`Ordenar por Continente ${selectedValue}`)

            
        }


    return(
        <div className={styles.container}>
           <div>
            <NavBar setCurrentPage={setCurrentPage } setCurrentIndex ={setCurrentIndex }/>
           </div>

           <div className={styles.section_home}>
            <select className={styles.input} onChange={handlerFilterByName}>

                <option className={styles.opcion} value="">Ordenar</option>
                <option className={styles.opcion} value="A-Z">A-Z</option>
                <option className={styles.opcion} value="Z-A">Z-A</option>

            </select>
            {order && <p className={styles.order}>{order}</p>}
           </div>

           <div className={styles.section_home}>
            <select className={styles.input} onChange={handlerFilterContinent}>

                <option className={styles.opcion} value="all">all</option>
                <option className={styles.opcion} value="Africa">Africa</option> 
                <option className={styles.opcion} value="Asia">Asia</option>
                <option className={styles.opcion} value="Europa">Europa</option>
                <option className={styles.opcion} value="Oceania">Oceania</option>
                <option className={styles.opcion} value="Antarctica">Antarctica</option>
                <option className={styles.opcion} value="North America">North America</option>
                <option className={styles.opcion} value="South America">South America</option>
            
            </select>
            
            </div>

            <div>
            { allCountry.length ?(
                <div>
                     <Cards countries = {currentcountry} />
                    <Pagination
                    numberOfCountry={allCountry.length}
                    currentPage={currentPage}
                    countryForPage={countryPerPage}
                    setCurrentPage = {setCurrentPage}
                    index = {currentIndex}
                    setIndex = {setCurrentIndex}                  
                    />
                </div>
            ):(
                <div>
                    <Loading/>
                </div>
            )}
            </div>
        </div>
    )
}

export default Home;