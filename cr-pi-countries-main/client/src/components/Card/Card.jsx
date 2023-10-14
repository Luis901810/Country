import { Link } from "react-router-dom";
import styles from "./Card.module.css"


function Card ({country}){
    const { id, flag, name, continent } = country

    return(
        <div className = {styles.Container}>
            <Link to = {`/home/detail/${id}`}>
                <img src={flag} alt={name}/>
                <h3>{name}</h3>
                <h3>{continent}</h3>
            </Link>
        </div>
    )
}
export default Card;