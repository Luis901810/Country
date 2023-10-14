import React from "react";
import styles from "./Loading.module.css";

const Loading = () =>{

    return (
        <div className={styles.container}>
            <img src= "https://upload.wikimedia.org/wikipedia/commons/9/96/Mundo_hecho_de_Banderas.gif" alt="loading"/>
        </div>
    )
}

export default Loading;