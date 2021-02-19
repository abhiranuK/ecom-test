import React from 'react'

const CartItem = (props) => {
  const { incrementItem, decrementItem, removeItem } = props.value
  const { id, title, img, price, total, count } = props.cart

  console.log(img)
  return (
    <div className=' row'>
      <div className='col-lg-2 mx-auto col-10'>
        <img src={img}></img>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p>{title}</p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p>{price}</p>
      </div>
      <div className='col-lg-2 mx-auto col-10 ' style={{ display: 'inline' }}>
        <p>{count}</p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <p>{total}</p>
      </div>
      <div className='col-lg-2 mx-auto col-10'>
        <button
          className='button btn btn-secondary'
          onClick={() => {
            removeItem(id)
          }}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
