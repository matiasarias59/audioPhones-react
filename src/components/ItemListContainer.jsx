import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import FilterListContainer from './FilterListContainer';
import ItemList from './ItemList'
import './ItemListContainer.css'

export default function ItemListContainer() {

  const { catalogue, categoryFilter } = useContext(AppContext);
  const [newCatalogue, setNewCatalogue] = useState([]);
  const [filterCatalogue, setFilterCatalogue] = useState([]);

  const { idCategory } = useParams("idCategory")
  const { idBrand } = useParams("idBrand")

  const [searchParams, setSearchParams] = useSearchParams();

  const searchUrl = useLocation().search

  const generateFilterCatalogue = (arrCatalogue, filter) => {

    /* const { nameFilter, arrFilter } = { filter };
    const filterCatalogue = [];

    arrFilter.forEach((f) => {
      const arr = arrCatalogue.filter(item => item[nameFilter] === f);
      filterCatalogue.push(...arr);
    })

    return filterCatalogue */
    const l = Object.keys(filter).length
    //console.log(l)
    const filterCatalogue = arrCatalogue.filter((item)=>{
      //console.log(item)
      let match = 0
      //console.log(Object.entries(filter))
      for (const [k,v] of Object.entries(filter)) {
       // console.log(k)
       // console.log(v)
        v.forEach(element => {
         // console.log(item[k].toLowerCase())
          if (item[k].toLowerCase() === element) {
            match += 1
          } 
        });
        
        
      }
      //onsole.log(match)
      return (l === match);
      

    })
    console.log(filterCatalogue)
    return filterCatalogue;

  }

  useEffect(() => {

    idCategory && setNewCatalogue(categoryFilter(catalogue, "familia", idCategory));
    idBrand && setNewCatalogue(categoryFilter(catalogue, "marca", idBrand));

  }, [catalogue, idBrand, idCategory])

  useEffect(() => {
    const filters = searchParams.entries();

    const searchFilters = {}

    for (const [k, v] of filters) {

      searchFilters[k] ? searchFilters[k] = [...(searchFilters[k]), v] : searchFilters[k] = [v];

    }

    searchUrl && console.log(searchFilters);
    setFilterCatalogue(generateFilterCatalogue(newCatalogue, searchFilters));
    
  }, [searchUrl])

  return (
    <div className='itemListContainer'>
      <FilterListContainer props={{ newCatalogue }} />
      <ItemList props={searchUrl ? filterCatalogue : newCatalogue} />
    </div>

  )
}
