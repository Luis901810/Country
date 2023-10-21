import { Link } from "react-router-dom";
import styles from "./Card.module.css"


function Card ({country}){
    const { id, flag, name, continent } = country
  

    return(
        <div>
            <div className = {styles.container}>

            <Link to = {`/home/detail/${id}`}>
                <img className= {styles.image_card} src={flag} alt="bandera del pais"/>
            </Link>

                <h3 className={styles.name}>{name}</h3>
                <h3 className={styles.continent}>{continent}</h3>
            </div>

        </div>
        
    )
}
export default Card;