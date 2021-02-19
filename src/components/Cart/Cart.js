import React, { Component } from 'react'
import CartColumn from './CartColumns'
import EmptyCart from './EmptyCart'
import { DataConsumerContext } from '../../DataProviderContext'
import CartList from './CartList'
import CartTotalValue from './CartTotal'

export default class Cart extends Component {
  render() {
    return (
      <>
        <DataConsumerContext>
          {(value) => {
            if (value.cart.length > 0) {
              return (
                <>
                  <div className='container' style={{ width: '60rem' }}>
                    <p className='cart-empty text-center'>Cart</p>
                    <div className='container mx-3'>
                      <CartColumn />
                      <CartList value={value} />
                      <CartTotalValue value={value} />
                    </div>
                  </div>
                </>
              )
            } else {
              return <EmptyCart />
            }
          }}
        </DataConsumerContext>
      </>
    )
  }
}
