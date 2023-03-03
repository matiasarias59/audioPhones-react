import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { catalogue, getCategoryList, getBrandList } = useContext(AppContext);

  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    setCategoryList(getCategoryList(catalogue));
    setBrandList(getBrandList(catalogue));
  }, [catalogue]);

  /* *********************************************** */

  const [menuIsActive, setMenuIsActive] = useState(false);
  const [categoryMenuIsActive, setCategoryMenuIsActive] = useState(false);
  const [brandMenuIsActive, setBrandMenuIsActive] = useState(false);

  const handleOnClick = () => setMenuIsActive(!menuIsActive);

  const handleOnClickCategory = () => {
    setCategoryMenuIsActive(!categoryMenuIsActive);
    setBrandMenuIsActive(false);
  };

  const handleOnClickBrand = () => {
    setBrandMenuIsActive(!brandMenuIsActive);
    setCategoryMenuIsActive(false);
  };

  
  return (
    <nav className="navbar">
      <div className={`navbar__icon`} onClick={handleOnClick}>
        <FontAwesomeIcon
          icon={menuIsActive ? faXmark : faBars}
          color="white"
          size="2x"
        />
      </div>
      <div className="navbar__logo__container">
        <Logo />
      </div>
      <div className={`menu__container${menuIsActive ? "--active" : ""}`}>
        <ul className="menu">
          <li>
            <div className="menu__name" onClick={handleOnClickCategory}>
              CATEGORIAS
              <div
                className={`menu__name__icon${
                  categoryMenuIsActive ? "--active" : ""
                }`}
                onClick={handleOnClickCategory}
              >
                <FontAwesomeIcon icon={faCaretRight} color="white" size="1x" />
              </div>
            </div>
            <ul
              className={`menu__list${categoryMenuIsActive ? "--active" : ""}`}
              onMouseLeave={handleOnClickCategory}
            >
              {categoryList.map((el, i) => {
                return (
                  <li key={i}>
                    <Link to={`categoria/${el.toLowerCase()}`}>{el}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <div className="menu__name" onClick={handleOnClickBrand}>
              MARCAS
              <div
                className={`menu__name__icon${
                  brandMenuIsActive ? "--active" : ""
                }`}
                onClick={handleOnClickBrand}
              >
                <FontAwesomeIcon icon={faCaretRight} color="white" size="1x" />
              </div>
            </div>
            <ul
              className={`menu__list${brandMenuIsActive ? "--active" : ""}`}
              onMouseLeave={handleOnClickBrand}
            >
              {brandList.map((el, i) => {
                return (
                  <li className="menu__list__item" key={i}>
                    <Link to={`marca/${el.toLowerCase()}`}>{el}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
}
