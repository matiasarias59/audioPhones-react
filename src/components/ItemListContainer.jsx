import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'

export default function ItemListContainer() {

  const [catalogue, setCatalogue] = useState([]);
  const {idCategory} = useParams("idCategory")


  const generateCatalogue = (rawData) => {
    
    const catalogueTemplate = [];
        for (let i = 1; i < rawData.length; i++) {
          const itemTemplate = {}; 
          const keys = rawData[0];
          for (const key of keys) {
            itemTemplate[key] = rawData[i][keys.indexOf(key)];
          }
          if (itemTemplate.publicar === 'TRUE' && itemTemplate.cantidad > 0) {
            catalogueTemplate.push(itemTemplate);
          }
        }  
    return catalogueTemplate    

  }

  const categoryFilter = (arr, keyword, filter) => {
    const arrFilter = arr.filter((el)=>{
      return el[keyword] === filter
    }) 
    return arrFilter
  }

    useEffect(() => {
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1t2igaddsZ8cPNsmsucG4Gyhtv3OIQkTDSKuxoybacCw/values/data!A1:R?key=AIzaSyCNjdPDGXC6zms7YbYknyLuSIbqbJKXgKA";
        fetch(url)
        .then(res => res.json())
        .then(data => {
          //console.log(data.values)
         // setItems([...data.values])

         if(idCategory){
          setCatalogue(categoryFilter(generateCatalogue(data.values),"familia",idCategory))
         }else{
            setCatalogue(generateCatalogue(data.values));
          }
        });
      }, [idCategory])

      console.log(catalogue)

  return (
    <>
    <div>ItemListContainer</div>
    <ItemList props={catalogue} />
    </>

  )
}
