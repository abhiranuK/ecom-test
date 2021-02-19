import React, { Component } from 'react'
import { DataConsumerContext } from '../DataProviderContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Details.css'

class Details extends Component {
  render() {
    return (
      <DataConsumerContext>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.dataDetails
          console.log('value', value)
          return (
            <div className='container py-5'>
              {/* title */}
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className='row'>
                <div className='col-10 mx-auto col-md-3 col-md-offset-3 my-3'>
                  <img src={img} className='img-Details img-fluid' alt='' />
                </div>
                {/* prdoduct info */}
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize info-details'>
                  <h1>model : {title}</h1>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    made by : <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    some info about product :
                  </p>
                  <p className='text-muted lead'>{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to='/'>
                      <button type='button' className='btn button btn-back'>
                        back to products
                      </button>
                    </Link>
                    <button
                      type='button'
                      className='btn button btn-add '
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id)
                        value.openModal(id)
                      }}
                    >
                      {inCart ? 'in cart' : 'add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </DataConsumerContext>
    )
  }
}

export default Details
