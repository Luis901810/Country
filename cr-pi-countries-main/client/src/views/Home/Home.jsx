// --- dependencias-----//

import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//------actions----//
import { getAllCountry } from "../../redux/actions";

// componentes functional

import Cards from "../../components/Cards/Cards";
//import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination"
import Loading from "../../components/Loading/Loading";

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
    
    // function para cambiar a pagina actual
    const handlerPageChange = (pageNumber) =>{
        setCurrentPage(pageNumber.selected + 1);
    }
    
    
    useEffect(() =>{
        dispatch(getAllCountry())
    }, [dispatch])


    return(
        <div>
            <h1>soy el home</h1>

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