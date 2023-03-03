import React from "react";

export default function Item({ props }) {
  const price = props.determinePrice(props.item);
  const linkFotos = props.isUsed(props.item);
  const urlDrive = "../src/img/products/";
  const urlNoPic = "../src/img/products/image-not-found-ap.jpg";
  return (
    <div className="item_card">
      <h3 className="item_tittle">
        {props.item.marca} {props.item.modelo}
      </h3>
      <img
        className="item_img"
        src={props.item.urlPic ? urlDrive + props.item.urlPic : urlNoPic}
        alt="Foto Producto"
      />
      <p className="item_desc">{props.item.descripcion}</p>
      <p className="item_cod">{props.item.codModelo}</p>
      <p className="item_color">Color: {props.item.color}</p>
      {linkFotos}
      <p className="item_price">{price}</p>
      <p className="item_stock">Stock: {props.item.cantidad}</p>
    </div>
  );
}
