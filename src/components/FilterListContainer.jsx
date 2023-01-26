import React, { useEffect, useContext, useState } from 'react'
import FilterList from './FilterList'
import Loading from './Loading'
import './FilterListContainer.css'
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';


export default function FilterListContainer({ props }) {
  const { getCategoryList, getSubCategoryList, getBrandList } = useContext(AppContext);
  const { newCatalogue } = props
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);


  const { idCategory } = useParams("idCategory")
  const { idBrand } = useParams("idBrand")


  //const locationPath = useLocation().pathname

  useEffect(() => {

    setCategoryList(getCategoryList(newCatalogue))
    setBrandList(getBrandList(newCatalogue))
    setSubCategoryList(getSubCategoryList(newCatalogue))
  }, [newCatalogue])


  if (!categoryList) {
    return (
      <Loading />
    )
  }

  return (

    <div className='filterListContainer'>
      {!idCategory && <><h3>Categorias:</h3>
        <FilterList props={{ list: categoryList, filterName: "familia" }} /></>}
      {!idBrand && <><h3>Marcas:</h3>
        <FilterList props={{ list: brandList, filterName: "marca" }} /></>}
      <h3>SubCategorias:</h3>
      <FilterList props={{ list: subCategoryList, filterName: "subFamilia" }} />
    </div>

  )
}
