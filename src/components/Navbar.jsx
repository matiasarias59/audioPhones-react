import React, { useContext, useEffect, useState } from 'react'
import Logo from './Logo'
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import './Navbar.css'
import SearchBar from './SearchBar';

export default function Navbar() {

  const { catalogue, getCategoryList, getBrandList, categoryFilter } = useContext(AppContext);

  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    setCategoryList(getCategoryList(catalogue))
    setBrandList(getBrandList(catalogue))

  }, [catalogue])

  const HandleMenuList = e => {
    console.log(e)
    e.target.nextSibling.classList.toggle("menu__list--active")
  }

  return (

    <nav className='navbar'>
      <ul className='menu'>
        <li>
          <div className='menu__name' onClick={(e)=>HandleMenuList(e)}>
            CATEGORIAS
          </div>
          <ul className='menu__list'>
            {categoryList.map((el, i) => {
              return (
                <li key={i}>
                  <Link to={`categoria/${el.toLowerCase()}`}>{el}</Link>
                </li>)
            })}
          </ul>
        </li>
        <li>
          <div className='menu__name' onClick={(e)=>HandleMenuList(e)}>
            MARCAS
          </div>
          <ul className='menu__list'>
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
