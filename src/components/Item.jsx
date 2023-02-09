import React from 'react'
//import './Item.css'

export default function Item({props}) {

  const price = props.determinePrice(props.item);
  const linkFotos = props.isUsed(props.item);
  const urlDrive = "../src/img/products/"
  const urlNoPic = "../src/img/products/image-not-found-ap.jpg"
  return (
    <div className='item_card'>
      <h3 className='item_tittle'>{props.item.marca} {props.item.modelo}</h3>
      <img className="item_img" src= {props.item.urlPic? urlDrive+props.item.urlPic : urlNoPic  } alt="Foto Producto"/>
      <p className="item_desc">{props.item.descripcion}</p>
      <p className="item_cod">{props.item.codModelo}</p>
      <p className="item_color">Color: {props.item.color}</p>
      {linkFotos}
      <p className="item_price">{price}</p>
      <p className="item_stock">Stock: {props.item.cantidad}</p>

    </div>
  )
}



/* const itemForList = document.createElement('div')
const price = determinePrice(item);
const linkFotos = isUsed(item);
// console.log(item.urlPic)
itemForList.innerHTML = `
    <h3 class="item_tittle">${item.marca} ${item.modelo}</h3>
    <img class="item_img" src= ${item.urlPic? urlDrive+item.urlPic : urlNoPic  } alt="Foto Producto">
    <p class="item_desc">${item.descripcion}</p>
    <p class="item_cod">${item.codModelo}</p>
    <p class="item_color">Color: ${item.color}</p>
    ${linkFotos}
    <p class="item_price">${price}</p>
    <p class="item_stock">Stock: ${item.cantidad}</p>`;
itemForList.classList.add("item_card")
list.appendChild(itemForList); */