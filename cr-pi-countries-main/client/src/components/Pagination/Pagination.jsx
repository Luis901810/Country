
import React from 'react';
import styles from './Pagination.module.css'; 

function Pagination({ numberOfCountry, currentPage, countryForPage, setCurrentPage, index, setIndex }) {
    

    const pageNumber=[]
    for(let i=1;i<=Math.ceil(numberOfCountry/countryForPage);i++){
        pageNumber.push(i)
    }

    const numBotones = 5 

    const pagePrevius =()=>{

        setIndex(index-numBotones)
        if(currentPage%numBotones===0) setCurrentPage(numBotones*(Math.trunc(currentPage/numBotones)-2)+1)
        else setCurrentPage(numBotones*(Math.trunc(currentPage/numBotones)-1)+1)
    }

    const pageNext=()=>{
        setIndex(index+numBotones)
        const suma = currentPage + numBotones
        if(suma % numBotones === 0) setCurrentPage(numBotones*((suma/numBotones)-1)+1)
        else setCurrentPage(numBotones*(Math.trunc(suma / numBotones))+1) 
    }

    const specificPage=(page)=>{
      setCurrentPage(page)
    }


    return (
      <div className={styles.conteiner}>
    <button className={`${currentPage <= numBotones ? styles.atrasAdelanteDesactive : styles.atrasAdelante}`} onClick={pagePrevius} disabled={currentPage <= 1}>
      {"<<"}
    </button>
    {pageNumber.map(noPage => (
      <button key={noPage} onClick={() => specificPage(noPage)} className={`${noPage === currentPage? styles.btnPageActive : styles.btnPage}`}>
        {noPage}
      </button>
    )).slice(index, index + numBotones)}
    <button className={`${pageNumber.length % numBotones === 0 && currentPage >= pageNumber.length - (numBotones - 1) ? styles.atrasAdelanteDesactive : (currentPage >= (numBotones * Math.trunc(pageNumber.length / numBotones) + 1) ? styles.atrasAdelanteDesactive : styles.atrasAdelante)}`} onClick={pageNext} disabled={currentPage>= pageNumber.length}>
      {">>"}
    </button>
  </div>
);
 }
    

export default Pagination;