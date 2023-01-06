import React from 'react'
import Item from './Item';

export default function ItemList({props}) {

const determinePrice = (item) => {
    if (item.consultarPrecio === "TRUE") {
        return "Consultar";
    }else{
        return (item.tipoCambio === "OFICIAL"? (`$ ${item.mayorPes}`) : (`USD ${item.mayorDol}`)) 
    }
}

const isUsed = (item) => {
    let link = item.subFamilia==="USADO"? `<a class="item_linkFotos" href=${item.observaciones} target="_blank"> Ver Fotos</a>` : ""
    return link
}


  return (
    <>
    {
      props.map((item)=>{
       return <Item props={{item, determinePrice, isUsed}}/>
      })
    }
    </>
  )
}
