// --- dependencias-----//

import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//------actions----//
import { getAllCountry } from "../../redux/actions";

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
    //const [order, setOrder ] = useState("")
    const [ currentPage, setCurrentPage] = useState(1)
    const countryPerPage = 10;

    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage ;

    const countryMatchingFilter = allCountry.filter((country) => country )
    const currentcountry = countryMatchingFilter.slice(indexOfFirstCountry, indexOfLastCountry)
    

  
    
    useEffect(() =>{
        dispatch(getAllCountry())
    }, [dispatch])


    return(
        <div className={styles.container}>
           <div>
            <NavBar setCurrentPage={setCurrentPage } setCurrentIndex ={setCurrentIndex }/>
           </div>

            <div>
            { allCountry.length ?(
                <div>
                     <Cards allCountry = {currentcountry} />
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