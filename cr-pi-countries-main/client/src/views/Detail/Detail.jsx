import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading"
import { resetCountryDetail,  getdetailCountry } from "../../redux/actions";
import styles from "./Detail.module.css";


const Detail = () =>{
    const loading = useSelector(state => state.loading)
    const detailCountry = useSelector((state) => state.detailCountry);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams();


    useEffect(()=>{
        if(!id){
            navigate("/error");
            return;
        }
        dispatch(getdetailCountry(id))
        return () => dispatch(resetCountryDetail())
    },[dispatch, id, navigate]);


    return(
        <div className={styles.conteiner}>
           {
            loading && <Loading/>
           }
        <section  className={styles.section1}>
            <h1 className={styles.name}>{detailCountry?.id}</h1>
            <h1 className={styles.name}>{detailCountry?.name}</h1>
            <h2 className={styles.title}>Capital</h2>
            <h2 className={styles.name}>{detailCountry?.capital}</h2>
            <button className={styles.btn_home}>
                 <svg onClick={()=>navigate(`/home`)} width="60px" height="60px" viewBox="0 -56 1136 1136" className="{styles.icon}"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M155.569231 473.206154s-42.535385 74.24 47.458461 64.590769L562.609231 178.018462l363.52 360.763076s70.695385 10.24 53.563077-52.578461-2.363077-6.892308-2.363077-6.892308L825.107692 327.286154l-3.741538-124.849231s-27.963077-57.895385-75.421539 0v49.230769l-159.507692-158.523077s-18.313846-25.796923-53.563077 3.741539S155.569231 473.206154 155.569231 473.206154z" fill="#C9D787" /><path d="M993.476923 509.44c0-0.196923 0-0.196923 0 0-0.393846-9.649231-1.181538-19.101538-2.56-28.750769-1.772308-10.830769-4.726154-21.464615-7.286154-31.901539-4.529231-7.483077-10.830769-7.68-15.753846-6.498461-0.393846 0.196923-0.787692 0.196923-1.181538 0.393846-2.56 0.787692-5.12 0.196923-7.089231-1.772308l-118.153846-117.956923c-1.181538-1.181538-1.969231-2.953846-1.969231-4.726154l-3.544615-118.350769v-0.984615l-1.378462-2.756923c-0.590769-1.181538-14.966154-30.326154-42.732308-33.673847-19.298462-2.363077-38.4 8.073846-57.107692 30.72l-3.347692 4.135385v2.756923c0 2.953846-1.575385 5.316923-4.332308 6.301539-2.56 1.181538-5.513846 0.590769-7.483077-1.378462l-122.092308-121.304615c-2.756923-3.347692-11.815385-12.996923-27.175384-14.966154-14.966154-1.969231-30.72 3.741538-46.670769 17.132308C488.96 114.609231 180.184615 427.52 145.132308 462.966154l-0.787693 0.984615-1.378461 2.166154c-2.363077 4.135385-22.252308 40.369231-5.12 66.363077 11.027692 16.935385 33.476923 23.630769 66.953846 20.086154l5.12-0.590769 348.16-348.356923c2.756923-2.756923 7.089231-2.756923 9.649231 0l351.704615 348.947692 4.726154 0.787692c0.984615 0.196923 5.710769 0.787692 12.406154 0.787692 15.163077 0 36.036923-3.150769 49.230769-17.92 3.544615-3.938462 6.104615-8.467692 8.073846-13.390769-0.196923-4.726154-0.196923-9.058462-0.393846-13.390769zM198.301538 521.846154c-1.181538 1.181538-2.756923 1.969231-4.332307 1.969231-16.738462 0.984615-27.963077-1.772308-31.704616-7.68-4.529231-6.892308-0.787692-22.252308 4.923077-33.476923 0.196923-0.590769 0.590769-0.984615 1.181539-1.575385 13.981538-14.178462 340.676923-345.403077 374.153846-373.169231 9.058462-7.483077 17.526154-11.224615 24.024615-10.633846 5.316923 0.590769 8.270769 4.135385 8.467693 4.332308l157.538461 156.750769c4.726154 4.726154 11.421538 6.104615 17.526154 3.741538l0.984615 0.984616v-1.181539c6.104615-2.756923 9.649231-8.467692 9.649231-15.163077v-36.233846c0-1.772308 0.590769-3.544615 1.969231-4.726154 6.695385-7.089231 16.738462-15.36 25.796923-14.375384 8.073846 0.984615 14.375385 8.664615 17.526154 13.193846 0.787692 0.984615 1.181538 2.363077 1.181538 3.741538l3.544616 118.35077c0.196923 4.332308 1.772308 8.270769 4.923077 11.224615l149.661538 149.661538 0.590769 2.166154c3.347692 12.406154 2.756923 21.464615-1.772307 26.584616-6.695385 7.68-21.858462 8.270769-28.16 8.270769-1.772308 0-3.544615-0.787692-4.923077-1.969231l-356.43077-353.673846a16.521846 16.521846 0 0 0-23.433846 0L198.301538 521.846154z" fill="#493B4E" /><path d="M895.803077 576.984615L591.163077 270.572308c-12.996923-13.193846-34.264615-13.193846-47.458462-0.196923L237.292308 574.227692c-6.301538 6.301538-10.043077 14.966154-10.043077 23.827693v267.027692c0 13.587692 8.073846 26.387692 20.873846 31.113846 6.301538 2.363077 14.572308 4.135385 25.206154 4.332308 34.067692 0.984615 242.018462 0.393846 324.332307 0.196923 18.510769 0 33.476923-15.163077 33.476924-33.673846v-248.123077c0-18.510769 14.966154-33.673846 33.673846-33.673846H756.184615c18.510769 0 33.673846 14.966154 33.673847 33.673846v248.713846c0 18.510769 14.966154 33.673846 33.673846 33.673846h45.686154c4.135385 0 8.467692-0.787692 12.20923-2.363077 8.270769-3.347692 20.873846-11.618462 24.024616-29.932308 4.135385-24.024615 1.181538-216.024615 0.196923-268.996923-0.196923-8.664615-3.741538-16.935385-9.846154-23.04z m-428.110769 166.203077h-87.433846c-18.510769 0-33.673846-14.966154-33.673847-33.673846v-90.584615c0-18.510769 14.966154-33.673846 33.673847-33.673846h87.433846c18.510769 0 33.673846 14.966154 33.673846 33.673846v90.584615c-0.196923 18.510769-15.163077 33.673846-33.673846 33.673846z" fill="#C9D787" /><path d="M920.024615 586.24l-0.196923-5.907692-342.055384-343.827693c-5.710769-5.710769-14.966154-5.710769-20.676923 0L217.009231 573.636923c-2.756923 2.756923-4.332308 6.498462-4.332308 10.436923v292.627692l0.196923 1.969231c0.196923 1.378462 6.104615 35.052308 60.258462 36.627693 12.8 0.393846 50.609231 0.590769 112.443077 0.590769 105.156923 0 244.381538-0.590769 245.76-0.590769 8.073846 0 14.572308-6.498462 14.572307-14.572308V604.750769c0-2.756923 2.166154-4.923077 4.923077-4.923077h119.335385c2.756923 0 4.923077 2.166154 4.923077 4.923077v296.369231c0 8.073846 6.498462 14.572308 14.572307 14.572308h84.283077l1.969231-0.196923c1.575385-0.196923 37.218462-6.301538 43.716923-44.11077 5.12-28.947692 0.590769-274.707692 0.393846-285.144615z m-115.593846 295.384615V585.255385c0-8.073846-6.498462-14.572308-14.572307-14.572308h-158.326154c-8.073846 0-14.572308 6.498462-14.572308 14.572308v295.975384c0 2.56-2.166154 4.726154-4.726154 4.726154-70.301538 0.196923-302.276923 0.984615-338.116923 0-21.464615-0.590769-28.947692-7.483077-31.113846-10.436923-0.590769-0.787692-0.984615-1.772308-0.984615-2.953846V592.147692c0-1.378462 0.590769-2.56 1.378461-3.544615l320.590769-317.833846c1.969231-1.969231 4.923077-1.969231 6.892308 0l318.621538 320.393846c0.984615 0.984615 1.378462 2.166154 1.378462 3.347692 1.575385 85.267692 3.544615 251.667692 0 271.753846-2.363077 13.981538-13.587692 18.510769-18.116923 19.889231-0.393846 0.196923-0.787692 0.196923-1.181539 0.196923h-62.424615c-2.56 0.196923-4.726154-1.969231-4.726154-4.726154z" fill="#493B4E" /><path d="M501.169231 570.683077H346.584615c-8.073846 0-14.572308 6.498462-14.572307 14.572308v157.932307c0 8.073846 6.498462 14.572308 14.572307 14.572308h154.584616c8.073846 0 14.572308-6.498462 14.572307-14.572308v-157.932307c0.196923-8.073846-6.498462-14.572308-14.572307-14.572308z m-140.012308 153.009231v-118.941539c0-2.756923 2.166154-4.923077 4.923077-4.923077h115.593846c2.756923 0 4.923077 2.166154 4.923077 4.923077v118.941539c0 2.756923-2.166154 4.923077-4.923077 4.923077h-115.593846c-2.56-0.196923-4.923077-2.363077-4.923077-4.923077z" fill="#493B4E" /></svg>
            </button>

        </section>

        <section className={styles.section2}>

            <section className={styles.sectionA}>
                <img  className={styles.img} src={detailCountry?.flag} alt={detailCountry?.name}/>
            
                <div className={styles.general}>

                    <div className={styles.continent}>
                        <h2 className={styles.title}>Continente</h2>
                        <h4 className={styles.number}>{detailCountry?.continent}</h4>
                    </div>

                    <div className={styles.continent}>
                        <h2 className={styles.title}>SubRegion</h2>
                        <h4 className={styles.number}>{detailCountry?.subregion}</h4>
                    </div>

                    <div className={styles.continent}>
                        <h2 className={styles.title}>Area</h2>
                        <h4 className={styles.number}>{detailCountry?.area}</h4>
                    </div>

                    <div className={styles.continent}>
                        <h2 className={styles.title}>Poblacion</h2>
                        <h4 className={styles.number}>{detailCountry?.population}</h4>
                    </div>
 
                </div>
            </section>

            <section className={styles.sectionB}>

               {detailCountry?.Activities && detailCountry.Activities.length >0 ?(
                <div className={styles.b2}>

                <h2 className={styles.title_activity}>Actividad</h2>

                {detailCountry?.Activities?.map((activity, index ) => (
                    
                    <div className={styles.activity} key={index}>
                        <h4  className={styles.text}>
                           <p>Nombre: {activity.name}</p> 
                           <p>Dificultad: {activity.difficulty}</p> 
                           <p>Duracion:{activity.duration}</p>
                           <p>Estacion: {activity.season}</p>
                        </h4>
                    </div>

               ))}
                </div>
               ):(
                <div className={styles.name}>
                    <p>No hay Actividad Disponible.</p>
                </div>
               )}
               
      
            </section>
           
            
        </section>
        </div>
    )
}

export default Detail;