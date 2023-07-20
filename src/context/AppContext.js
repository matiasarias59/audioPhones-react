import React, {useState, useEffect, createContext} from 'react'

export const AppContext = createContext();

export const AppProvider = (props) => {


  const [catalogue, setCatalogue] = useState([]);


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
    const arrFilter = arr.filter((el) => {
      return el[keyword].toLowerCase() === filter.toLowerCase()
    })
    return arrFilter
  }

 
  const getCatalogue = async () => {
    const url = "https://sheets.googleapis.com/v4/spreadsheets/1QI-vIZXTXYBrEQmXF2_VCNgriXktwFsVH2Qi-VMqEZ8/values/data!A1:R?key=AIzaSyBz6fhNgPKZmf3Kye1WUmTe-4PSS0WrJbI";
    const res = await fetch(url);
    const data = await res.json()
    const fullCatalogue = generateCatalogue(data.values);
    setCatalogue(fullCatalogue)
  }

  const getBrandList = (arrCatalogue) => {
    const brandList = [];
    arrCatalogue.forEach((el)=>{
      const cat = el.marca;
      !brandList.includes(cat) && brandList.push(cat);
    })
    brandList.sort();
    return brandList
  }

  const getCategoryList = (arrCatalogue) => {
    const categoryList = [];
    arrCatalogue.forEach((el)=>{
      const cat = el.familia;
      !categoryList.includes(cat) && categoryList.push(cat);
    })
    categoryList.sort();
    return categoryList
  }

  const getSubCategoryList = (arrCatalogue) => {
    const subCategoryList = [];
    arrCatalogue.forEach((el)=>{
      const cat = el.subFamilia;
      !subCategoryList.includes(cat) && subCategoryList.push(cat);
    })
    subCategoryList.sort();
    return subCategoryList
  }

useEffect(() => {
   getCatalogue()
  
}, [])



  return (
<AppContext.Provider value={ {categoryFilter, catalogue, setCatalogue, getCategoryList, getSubCategoryList, getBrandList, getCatalogue }}>
        {props.children}
    </AppContext.Provider> 
  )
}
