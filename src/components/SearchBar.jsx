import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar() {

  const navigate = useNavigate();

  const handleSearchBar = (e) => {
    e.preventDefault();
    console.log(e);
    const searchValue = e.target[0].value;

    navigate(`/search/?descripcion=${searchValue}`);
    e.target.reset();

  }


  return (
    <>
      <form className="form__search" action="" onSubmit={(e) => handleSearchBar(e)}>
        <input type="search" name="" className="form__search__input" placeholder='Buscar...' />
        <button className="form__search_btn" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="red" />
        </button>

      </form>
    </>
  )
}
