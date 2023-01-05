import React, {useEffect} from 'react'
import ItemList from './ItemList'

export default function ItemListContainer() {

    useEffect(() => {
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1t2igaddsZ8cPNsmsucG4Gyhtv3OIQkTDSKuxoybacCw/values/data!A1:R?key=AIzaSyCNjdPDGXC6zms7YbYknyLuSIbqbJKXgKA";
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    
    }, [])
    
  return (
    <>
    <div>ItemListContainer</div>
    <ItemList/>
    </>

  )
}






/* export const getItemsJson = async (url) => {
    const res = await fetch (url);
    const data = await res.json();
    const items = data.values;
    return (items) 
} */