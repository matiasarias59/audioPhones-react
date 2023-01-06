import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [catalogue, setCatalogue] = useState([]);

    useEffect(() => {
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1t2igaddsZ8cPNsmsucG4Gyhtv3OIQkTDSKuxoybacCw/values/data!A1:R?key=AIzaSyCNjdPDGXC6zms7YbYknyLuSIbqbJKXgKA";
        fetch(url)
        .then(res => res.json())
        .then(data => {
          //console.log(data.values)
          setItems([...data.values])

        });
      }, [])

    useEffect (() => {
      const catalogueTemplate = [];
        for (let i = 1; i < items.length; i++) {
          const itemTemplate = {}; 
          const keys = items[0];
          for (const key of keys) {
            itemTemplate[key] = items[i][keys.indexOf(key)];
          }
          if (itemTemplate.publicar === 'TRUE' && itemTemplate.cantidad > 0) {
            catalogueTemplate.push(itemTemplate);
          }
          
        }  
        setCatalogue([...catalogueTemplate]);
      }, [items])  
      
      
      console.log(items)

      console.log(catalogue)
  return (
    <>
    <div>ItemListContainer</div>
    <ItemList props={catalogue} />
    </>

  )
}
