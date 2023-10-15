import Card from "../Card/Card";
import styles from "./Cards.module.css";


function Cards({allCountry}){
    const countries = allCountry;
    return (
        <div className={styles.container}>
            {
                 countries?.map((country, index) => (
                    <Card key={index} country = {country}/>
                 ))
            }
           
        </div>
    )
};

export default Cards;