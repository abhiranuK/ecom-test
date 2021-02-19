import React from 'react'

export default function CartColumns() {
  return (
    <div className=' row'>
      <div className='col-lg-2 mx-auto col-10'>
        <p>
          <strong>Product</strong>
        </p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p>
          <strong>Product Name</strong>
        </p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p>
          <strong>Price</strong>
        </p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p>
          <strong>Quantity</strong>
        </p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p>
          <strong>Total</strong>
        </p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p></p>
      </div>
    </div>
  )
}
