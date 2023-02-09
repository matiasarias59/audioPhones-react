import React from 'react'
import Item from './Item';
import EmpyElement from './EmpyElement';
//import './ItemList.css'

export default function ItemList({props}) {

const determinePrice = (item) => {
    if (item.consultarPrecio === "TRUE") {
        return "Consultar";
    }else{
        return (item.tipoCambio === "OFICIAL"? (`$ ${item.mayorPes}`) : (`USD ${item.mayorDol}`)) 
    }
}

const isUsed = (item) => {
    let link = item.subFamilia==="USADO"? <a className="item_linkFotos" href={item.observaciones}/*  target="_blank" */> Ver Fotos</a> : ""
    return link
}


  return (
    <div className='itemList'>
    {props.length ?  props.map((item, index)=>{
       return <Item props={{item, determinePrice, isUsed,}} key={index}/>
      }) : <EmpyElement/>
    }
    </div>
  )
}
