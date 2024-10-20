import React from 'react'

export default function Cart({cartItems}) {
  return (
    <section className='p-6 max-w-3xl mx-auto'>
      <h2 className='text 2xl font-bold'>Giỏ hàng của bạn </h2>
      {
        cartItems.length > 0 ? 
        <>
        <ul className='border border-gray-300 rounded-lg divide-y divide-gray-200'>
          {
            cartItems.map((product) =>{
              return (
                <li key={product.id} className=''>
                  <span>{product.prdName} </span>
                  <span>{product.prdprice} </span>
                </li>
              )
            })
          }

        </ul>
        </>
        :
         <div></div>
      }
    </section>
  )
}
