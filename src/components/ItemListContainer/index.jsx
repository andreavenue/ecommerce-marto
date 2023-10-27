import "./style.css"
import React from 'react'
import Message from "../Message"
import ItemCount from "../ItemCount"

function ItemListContainer() {
  return (
    <>
      {<Message
        greeting="Lista de Produtos"
      /> }
      <ItemCount stock={5} initial={1}/>
    </>
  )
}
export default ItemListContainer