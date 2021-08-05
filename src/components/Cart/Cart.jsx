import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(({ id, price, quantity, totalPrice, title }) => {
          return (
            <CartItem
              key={id}
              item={{
                title,
                quantity,
                total: totalPrice,
                price,
                id
              }}
            />
          )
        })}
      </ul>
    </Card>
  )
}

export default Cart
