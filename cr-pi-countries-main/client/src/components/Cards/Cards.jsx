import Card from "../Card/Card";



function Cards({allCountry}){
    const countries = allCountry;
    return (
        <div className="container">
            {
                 countries?.map((country, index) => (
                    <Card key={index} country = {country}/>
                 ))
            }
           
        </div>
    )
};

export default Cards;