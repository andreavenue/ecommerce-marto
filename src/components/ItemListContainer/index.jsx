import "./style.css"
import React, { useEffect, useState } from 'react'
import Message from "../Message"
import ItemList from "../ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    pegarProdutos()
      .then((response) => {
        //console.log(response);
        setProducts(response);
        setLoading(false)
      })
      .catch((erro) => {
        console.log('Mensagem de erro: ' + erro);
      })

  }, [])

  function pegarProdutos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const productsItem = [
          {id:"XYZ", title: 'Item 01', price: 20, pictureUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' },
          {id:"YZX", title: 'Item 02', price: 30, pictureUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' },
          {id:"WDE", title: 'Item 03', price: 40, pictureUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' },
          {id:"OPI", title: 'Item 04', price: 50, pictureUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' },
        ];
        resolve(productsItem);
      }, 2000)
    })
  }

  return (
    <>
      <Message
        greeting="Lista de Produtos"
      /> 
      {/* <ItemCount stock={5} initial={1}/>  */}
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </>
  )
}
export default ItemListContainer