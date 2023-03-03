import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import FilterListContainer from "./FilterListContainer";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { catalogue, categoryFilter } = useContext(AppContext);
  const [newCatalogue, setNewCatalogue] = useState([]);
  const [filterCatalogue, setFilterCatalogue] = useState([]);

  const { idCategory } = useParams("idCategory");
  const { idBrand } = useParams("idBrand");

  const [searchParams, setSearchParams] = useSearchParams();

  const searchUrl = useLocation().search;
  const pathName = useLocation().pathname;

  const generateFilterCatalogue = (arrCatalogue, filter) => {
    const l = Object.keys(filter).length;
    const filterCatalogue = arrCatalogue.filter((item) => {
      let match = 0;
      for (const [k, v] of Object.entries(filter)) {
        if (k === "descripcion" && item[k].toLowerCase().includes(v)) {
          match += 1;
        } else {
          v.forEach((element) => {
            if (item[k].toLowerCase() === element) {
              match += 1;
            }
          });
        }
      }
      return l === match;
    });
    return filterCatalogue;
  };

  useEffect(() => {
    pathName === "/search/" && setNewCatalogue(catalogue);

    idCategory &&
      setNewCatalogue(categoryFilter(catalogue, "familia", idCategory));
    idBrand && setNewCatalogue(categoryFilter(catalogue, "marca", idBrand));
  }, [catalogue, idBrand, idCategory]);

  useEffect(() => {
    const filters = searchParams.entries();

    const searchFilters = {};

    for (const [k, v] of filters) {
      searchFilters[k]
        ? (searchFilters[k] = [...searchFilters[k], v])
        : (searchFilters[k] = [v]);
    }

    setFilterCatalogue(
      generateFilterCatalogue(
        newCatalogue.length ? newCatalogue : catalogue,
        searchFilters
      )
    );
  }, [searchUrl, newCatalogue]);

  return (
    <div className="itemListContainer">
      {pathName !== "/search/" && <FilterListContainer props={newCatalogue} />}

      <ItemList props={searchUrl ? filterCatalogue : newCatalogue} />
    </div>
  );
}
