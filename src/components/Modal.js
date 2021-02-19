import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataConsumerContext } from '../DataProviderContext'
import { Button, Modal } from 'react-bootstrap'
import './Details.css'

class CartModal extends Component {
  render() {
    return (
      <div>
        <DataConsumerContext>
          {(value) => {
            const { ismodalOpen, closeModal } = value
            const { img, title, price, info } = value.modalDetails
            console.log(ismodalOpen)
            {
              return (
                <Modal show={ismodalOpen}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Item <strong>{title}</strong> Added
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img src={img} />
                    <div style={{ float: 'right' }}>
                      <p>
                        <strong>Details: </strong>
                        {info}
                      </p>
                      <p>
                        <strong>Price: ${price}</strong>
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className=' btn-back'
                      onClick={() => {
                        return value.closeModal()
                      }}
                    >
                      Close
                    </Button>
                    <Link to='/cart'>
                      <Button
                        className=' btn-add'
                        onClick={() => {
                          return value.closeModal()
                        }}
                      >
                        Go to Cart
                      </Button>
                    </Link>
                  </Modal.Footer>
                </Modal>
              )
            }
          }}
        </DataConsumerContext>
      </div>
    )
  }
}

export default CartModal
