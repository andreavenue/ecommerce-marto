import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function CartWidget() {
  return (
    <div>
        <a href="/" className="group -m-2 flex items-center p-2">
            <ShoppingCartIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            />
            <span className="sr-only">items in cart, view bag</span>
        </a>
    </div>
  )
}
export default CartWidget
