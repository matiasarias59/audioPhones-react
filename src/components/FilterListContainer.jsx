import React, { useEffect, useContext, useState } from "react";
import FilterList from "./FilterList";
import Loading from "./Loading";
//import './FilterListContainer.css'
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FilterListContainer({ props }) {
  const { getCategoryList, getSubCategoryList, getBrandList } =
    useContext(AppContext);
  //const { newCatalogue } = props
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const { idCategory } = useParams("idCategory");
  const { idBrand } = useParams("idBrand");

  //const locationPath = useLocation().pathname

  useEffect(() => {
    setCategoryList(getCategoryList(props));
    setBrandList(getBrandList(props));
    setSubCategoryList(getSubCategoryList(props));
  }, [props]);

  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleOnClick = () => setMenuIsActive(!menuIsActive);

  if (!categoryList) {
    return <Loading />;
  }

  return (
    <div className="filterListContainer">
      <div className="filterListContainer__title">
        <h3>Refina tu busqueda</h3>
        <div
          className={`filterListContainer__title__icon${
            menuIsActive ? "--active" : ""
          }`}
          onClick={handleOnClick}
        >
          <FontAwesomeIcon icon={faCaretRight} color="red" size="2x" />
        </div>
        <div
          className={`filterListContainer__title__closeIcon${
            menuIsActive ? "--active" : ""
          }`}
          onClick={handleOnClick}
        >
          <FontAwesomeIcon icon={faXmark} color="red" size="2x" />
        </div>
      </div>
      <div
        className={`filterListContainer__group${
          menuIsActive ? "--active" : ""
        }`}
      >
        {!idCategory && (
          <>
            <h3
              className={`filterListContainer__titleList${
                menuIsActive ? "--active" : ""
              }`}
            >
              Categorias:
            </h3>
            <FilterList props={{ list: categoryList, filterName: "familia" }} />
          </>
        )}
      </div>
      <div
        className={`filterListContainer__group${
          menuIsActive ? "--active" : ""
        }`}
      >
        {!idBrand && (
          <>
            <h3
              className={`filterListContainer__titleList${
                menuIsActive ? "--active" : ""
              }`}
            >
              Marcas:
            </h3>
            <FilterList props={{ list: brandList, filterName: "marca" }} />
          </>
        )}
      </div>
      <div
        className={`filterListContainer__group${
          menuIsActive ? "--active" : ""
        }`}
      >
        <h3
          className={`filterListContainer__titleList${
            menuIsActive ? "--active" : ""
          }`}
        >
          SubCategorias:
        </h3>
        <FilterList
          props={{ list: subCategoryList, filterName: "subFamilia" }}
        />
      </div>
    </div>
  );
}
