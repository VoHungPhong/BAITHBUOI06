import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({cartItems}) {
  return (
    <section className='flex justify-between iteams -center p-4 bg-slate-800 shadow-md '>
      <a href='/' className='text 2xl: font-bold text bg-gray-800'>My Store</a>
      <Link to='/cart' className='text lg text-blue-600 hower: text to-blue-800' >
        Giỏ Hàng {cartItems.length}
      </Link>
    </section>
  )
}
