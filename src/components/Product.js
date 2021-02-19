import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Product.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DataConsumerContext } from '../DataProviderContext'

const Product = (props) => {
  const { id, title, img, price, inCart } = props.product
  return (
    <div className='col'>
      <Card
        bg='light'
        key={id}
        text='dark'
        className='shadow p-3 mb-5 bg-white rounded'
        style={{ width: '20rem ml-6' }}
      >
        <DataConsumerContext>
          {(value) => (
            <Card.Body>
              <div>
                <img src={img} className='zoom12'></img>
              </div>
              <Card.Title className='justify-content-between align-items-center'>
                {' '}
                {title}{' '}
              </Card.Title>
              <Card.Text>Price: {price}</Card.Text>

              {inCart ? (
                <Button className='Button btn-det' disabled>
                  inCart
                </Button>
              ) : (
                <Button
                  className='btn button btn-det'
                  onClick={() => {
                    value.addToCart(id)
                    value.openModal(id)
                  }}
                >
                  Add
                </Button>
              )}

              <Link to='/details'>
                <Button
                  className='btn button btn-Add'
                  style={{ float: 'right' }}
                  onClick={() => {
                    value.handleDetails(id)
                  }}
                >
                  {' '}
                  Details
                </Button>
              </Link>
            </Card.Body>
          )}
        </DataConsumerContext>
      </Card>
    </div>
  )
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
}
export default Product
