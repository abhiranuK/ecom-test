import React from 'react'
import CartItem from './CartItem'

const CartList = (props) => {
  console.log('List', props)
  return props.value.cart.map((item) => {
    return <CartItem key={item.id} cart={item} value={props.value} />
  })
}

export default CartList
