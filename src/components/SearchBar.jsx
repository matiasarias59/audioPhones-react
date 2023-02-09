import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function SearchBar() {
  
  const navigate = useNavigate(); 
  
  const handleSearchBar = (e) => {
    e.preventDefault()
    //console.log(e.target[0].value)
    const searchValue = e.target[0].value 
    
    navigate(`/search/?descripcion=${searchValue}`)

  }


  return (
    <>
      <form className="form__search" action="" onSubmit={(e) => handleSearchBar(e)}>
        <input type="search" name="" className="form__search__input" placeholder='Buscar...' />
        {/* <button className="form__search_btn" type="submit">Buscar</button> */}

      </form>
    </>
  )
}
