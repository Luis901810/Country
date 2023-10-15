import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css"


const NavBar = ({setCurrentPage, setCurrentIndex }) =>{


    return(
        <div className={styles.container}>

            <Link to="/">
                <button className={styles.nav}>Exit</button>
            </Link>

            <Searchbar setCurrentPage={setCurrentPage } setCurrentIndex ={setCurrentIndex } />
           
            <Link to="/home/formulary">
                <button className={styles.nav}>New Activity</button>
            </Link>
        </div>
    )
}

export default NavBar;