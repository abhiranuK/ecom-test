import React, { Component } from 'react'
import Product from './Product'
import { DataConsumerContext } from '../DataProviderContext'
import './Product.css'

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className='container my-5'>
          <h2 className='ml-10 header-product text-center'>Our Products</h2>
          <div className='container ml-3 mr-3'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              <DataConsumerContext>
                {(value) => {
                  return value.dataList.map((product) => {
                    return <Product key={Product.id} product={product} />
                  })
                }}
              </DataConsumerContext>
            </div>
          </div>
        </div>
      </>
    )
  }
}
