import React, { useEffect, useContext, useState } from 'react'
import FilterList from './FilterList'
import Loading from './Loading'
//import './FilterListContainer.css'
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';


export default function FilterListContainer({props}) {
  const { getCategoryList, getSubCategoryList, getBrandList } = useContext(AppContext);
  //const { newCatalogue } = props
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);


  const { idCategory } = useParams("idCategory")
  const { idBrand } = useParams("idBrand")


  //const locationPath = useLocation().pathname

  useEffect(() => {

    setCategoryList(getCategoryList(props))
    setBrandList(getBrandList(props))
    setSubCategoryList(getSubCategoryList(props))
  }, [props])


  if (!categoryList) {
    return (
      <Loading />
    )
  }

  return (

    <div className='filterListContainer'>
      <h3 className='filterListContainer__title'>Refina tu busqueda:</h3>
      <div>
        {!idCategory && <><h3 className='filterListContainer__titleList'>Categorias:</h3>
          <FilterList props={{ list: categoryList, filterName: "familia" }} /></>
        }
      </div>
      <div>
        {!idBrand && <><h3 className='filterListContainer__titleList'>Marcas:</h3>
          <FilterList props={{ list: brandList, filterName: "marca" }} /></>
        }
      </div>
      <div>
        <h3 className='filterListContainer__titleList'>SubCategorias:</h3>
        <FilterList props={{ list: subCategoryList, filterName: "subFamilia" }} />
      </div>
    </div>

  )
}
