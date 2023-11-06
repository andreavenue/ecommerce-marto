import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail';

function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect( () => {
        getItem()
        .then((result) =>{
            console.log(result)
            setItem(result)
            setLoading(false)
        })
        .catch((erro) => {
            console.log('Mensagem de erro: ' + erro);
          })
    }, []);

    function getItem() {
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                const detailItem = 
                    {
                        description: 'Uma camiseta básica para e-commerce é uma peça de vestuário versátil e fundamental em qualquer guarda-roupa.',
                        name: 'Kit Básico - Pack 6 Camisetas', 
                        price: 192, 
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg'
                    }
                ;
                resolve(detailItem);
            }, 2000);
        });
    }
  return (
    <div className="">
        {loading ? (
        <p className='text-center'>Carregando detalhe do produto...</p>
      ) : (
        <ItemDetail item = {item} />
      )}
        
    </div>
  
  )
}

export default ItemDetailContainer