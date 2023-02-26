import React from "react";
import { Link } from "react-router-dom";

export default function EmpyElement() {
  return (
    <div className="empyElement__container">
      <p className="empyElement__container__msg">Oops.. Nada por aqui</p>
      <Link to={"/"} className="empyElement__container__link">
        Ir al Inicio
      </Link>
    </div>
  );
}
