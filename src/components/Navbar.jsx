import React, { useContext, useEffect, useState } from 'react'
import Logo from './Logo'
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
//import './Navbar.css'
import SearchBar from './SearchBar';

export default function Navbar() {

  const { catalogue, getCategoryList, getBrandList } = useContext(AppContext);

  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [menuList, setMenuList] = useState(false)

  useEffect(() => {
    setMenuList(false);
    setCategoryList(getCategoryList(catalogue))
    setBrandList(getBrandList(catalogue))

  }, [catalogue])

  const HandleMenuName = e => {
    e.stopPropagation();
    //console.log(e)
    e.target.nextSibling.classList.toggle("active")
  }

  /**
   * Funcion. Remueve la clase "active" del elemento.
   * @param {event} e 
   */
  const HandleMenuList = e => {
    //e.stopPropagation();
    console.log(e)
    e.target.classList.remove("active")
  }


  return (

    <nav className='navbar'>
      <Logo/>
      <ul className='menu'>
        <li>
          <div className='menu__name' onClick={(e)=>HandleMenuName(e)} >
            CATEGORIAS ▼
          </div>
          <ul className='menu__list' onMouseLeave={(e)=>HandleMenuList(e)} >
            {categoryList.map((el, i) => {
              return (
                <li key={i}>
                  <Link to={`categoria/${el.toLowerCase()}`}>{el}</Link>
                </li>)
            })}
          </ul>
        </li>
        <li>
          <div className='menu__name' onClick={(e)=>HandleMenuName(e)}>
            MARCAS ▼
          </div>
          <ul className='menu__list' onMouseLeave={(e)=>HandleMenuList(e)}>
            {brandList.map((el, i) => {
              return (
                <li className='menu__list__item' key={i}>
                  <Link to={`marca/${el.toLowerCase()}`}>{el}</Link>
                </li>)
            })}
          </ul>
        </li>
      </ul>
      <SearchBar/>

    </nav>

  )
}
