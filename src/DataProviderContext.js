import React, { Component } from 'react'
import { dataList, dataDetails } from './data'

const DataContext = React.createContext()
class DataProviderContext extends Component {
  state = {
    dataList: [],
    dataDetails: dataDetails,
    cart: [],
    ismodalOpen: false,
    modalDetails: dataDetails,
    cartTotal: 0,
    cartSubtotal: 0,
  }

  componentDidMount() {
    this.setProducts()
  }

  openModal = (id) => {
    const modalData = this.getItem(id)
    this.setState(() => {
      return { modalDetails: modalData, modalOpen: true }
    })
  }

  closeModal = (id) => {
    this.setState(() => {
      console.log('close it')
      return { ismodalOpen: false }
    })
  }
  setProducts = () => {
    let tempProducts = []
    dataList.forEach((item) => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(() => {
      return { dataList: tempProducts }
    })
  }

  getItem = (id) => {
    const item = this.state.dataList.find((item) => item.id === id)
    return item
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.dataList]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price

    this.setState(
      () => {
        return {
          products: [...tempProducts],
          cart: [...this.state.cart, product],
          ismodalOpen: true,
        }
      },
      () => {
        this.addTotals()
      }
    )
  }

  //Action Methods
  incrementItemFromCart = (id) => {
    console.log('increment')
    const cartItem = this.state.cart.filter((item) => item.id === id)
    let count = cartItem.count + 1
    let total = cartItem.total + cartItem.price
    this.setState(() => {
      return {
        cart: [...this.state.cart],
      }
    })
  }

  decrementItemFromCart = (id) => {
    console.log('decrement')
  }

  removeItemFromCart = (id) => {
    let tempProducts = [...this.state.dataList]
    let tempCart = [...this.state.cart]
    let index = tempProducts.indexOf(this.getItem(id))
    let removedItems = tempProducts[index]
    let newCart = tempCart.filter((item) => item.id != id)
    removedItems.inCart = false
    removedItems.count = 0
    removedItems.total = 0

    this.setState(() => {
      return {
        cart: [...newCart],
        dataList: [...tempProducts],
      }
    }, this.addTotals())
  }

  clearItemFromCart = (id) => {
    this.setState(() => {
      return {
        cart: [],
      }
    }, this.setProducts())
  }
  handleDetails = (id) => {
    const item = this.getItem(id)
    console.log('item', item)
    console.log('id', id)

    this.setState(() => {
      return { dataDetails: item }
    })
  }
  addTotals = () => {
    let subtotal = 0
    this.state.cart.map((item) => (subtotal += item.total))
    const total = subtotal + 20
    console.log('subtotal', subtotal)
    this.setState(() => {
      return {
        cartSubtotal: subtotal,
        cartTotal: total,
      }
    })
  }

  //render
  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementItem: this.incrementItemFromCart,
          decrementItem: this.decrementItemFromCart,
          removeItem: this.removeItemFromCart,
          clearItem: this.clearItemFromCart,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

const DataConsumerContext = DataContext.Consumer
export { DataProviderContext, DataConsumerContext }
