import React from 'react'

function Item({product}) {

  return (
    <div className='group relative'>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.pictureUrl}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>


      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="https://google.com.br">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">R$ {product.price}</p>
      </div>
    </div>
  )
}

export default Item