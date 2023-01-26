import React, { useEffect, useState } from 'react'
import { useSearchParams,  } from 'react-router-dom';


export default function ItemFilterList({props}) {
  
  const {item, filterName} = props;

  const lowItem = item.toLowerCase();
 
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterIsActive, setFilterIsActive] = useState();

  const itemFilterExist = (f,i) => {
    const listParams = searchParams.getAll(f)
    return listParams.includes(i)
  }

  const handlerFilterAdd = () => {

    if(!itemFilterExist(filterName, lowItem)){
      searchParams.append(filterName, lowItem)
      setSearchParams(searchParams)
    }
  }

  const handlerFilterDel = () => {
    
    const items = searchParams.getAll(filterName);
    //console.log(item)
    const newItems = items.filter( i =>i !== lowItem);
    console.log(newItems)
    searchParams.delete(filterName);
    newItems.forEach((i)=>{
      searchParams.append(filterName, i);
    })
    setSearchParams(searchParams);

  }

  useEffect(()=>{

    setFilterIsActive(itemFilterExist(filterName, lowItem))

  },[searchParams])


  return (
    <li>
        <p onClick={handlerFilterAdd}>{item}</p>
        {filterIsActive && <div onClick={handlerFilterDel}>X</div>}
        
        </li>
  )
}
