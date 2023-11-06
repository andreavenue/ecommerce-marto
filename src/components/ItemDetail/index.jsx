import React from 'react'

function ItemDetail({item}) {
  return (
    <div className="grid w-9/12 grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mx-auto">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img src={item.imageSrc} alt={item.name} className="object-cover object-center" />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
                <div className='mb-4'>
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{item.name}</h2>
                    <p className="text-2xl text-gray-900">R$ {item.price}</p>
                </div>
                <p className="text-2xl text-gray-900">{item.description}</p>
                <button className="bg-amber-600 mt-6 px-4 py-2 text-white rounded">Adicionar ao Carrinho</button>
            </div>
        </div>

  )
}

export default ItemDetail;