import { useState } from 'react'
import { Container, Button, Card, Alert, Form } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import NoPage from './components/NoPage'
import Cart from './components/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CartModal from './components/Modal'
import Dummy from './components/dummy'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/details' component={Details}></Route>
          <Route exact path='/cart' component={Cart}></Route>
          <Route exact path='/' component={ProductList}></Route>
          <Route component={NoPage}></Route>
          <Route exact path='/dummy' component={NoPage}></Route>
        </Switch>
        <CartModal />
      </div>
    </>
  )
}

export default App
