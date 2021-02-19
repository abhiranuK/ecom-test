import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo192.png'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar mt-4 navbar-expand-xl navbar-light'>
        <div className='container'>
          <Link to='/'>
            <img className='img-Logo' src={logo} alt='logo'></img>
          </Link>
          <ul className=' navbar-nav ml-4 align-items-center font-weight-bold'>
            <li className='nav-item ml-5'>
              <Link to='/' className='nav-link'>
                Products
              </Link>
            </li>
            <Link to='/dummy'>
              <li className='nav-item ml-5'>Dummy1</li>
            </Link>
            <Link to='/dummy'>
              <li className='nav-item ml-5'>Dummy2</li>
            </Link>
          </ul>
          <Link to='/cart' className='ml-auto'>
            <button className='cart-btn'>
              <i className='fas fa-cart-plus'></i> MyCart
            </button>
          </Link>
        </div>
      </nav>
    )
  }
}
