import React from "react";
import HomeCategoriesContainer from "./HomeCategoriesContainer";
/* import NewInProducts from "./NewInProducts";
import OfferCarousel from "./OfferCarousel"; */

export default function Home() {
  return (
    <div className="home__container">
      <h2>Bienvenidos</h2>
      <HomeCategoriesContainer/>

      {/* <OfferCarousel/>
    <NewInProducts/> */}
    </div>
  );
}
