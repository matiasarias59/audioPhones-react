import React from "react";
import HomeCategory from "./HomeCategory";

import {
  faAppleAlt,
  faCamera,
  faHeadphones,
  faLaptop,
  faMobileAndroid,
  faTv,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeCategoriesContainer() {
  const homeCategories = [
    { category: "Celulares", icon: faMobileAndroid },
    { category: "Computacion", icon: faLaptop },
    { category: "Apple", icon: faAppleAlt },
    { category: "Audio Portatil", icon: faVolumeHigh },
    { category: "Smart Tv", icon: faTv },
    { category: "Auriculares", icon: faHeadphones },
    { category: "Fotografia", icon: faCamera },
  ];

  return (
    <>
      <div className="home__categories__container">
        {homeCategories.map((el, index) => (
          <HomeCategory icon={el.icon} name={el.category} key={index} />
        ))}
      </div>
    </>
  );
}
