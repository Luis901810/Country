import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";


const Landing = () =>{

    const navigate = useNavigate();

    return(
        <div className={styles.Container}>
            
            <div className={styles.h1}>
                 <h1>Bienvenidos a mi Pagina de Paises</h1>
            </div>
            <button className={styles.btn} onClick={() =>navigate("/home")}>Home</button>
            

        </div>
    )
}

export default Landing;