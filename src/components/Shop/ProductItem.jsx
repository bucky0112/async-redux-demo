import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
import Card from '../UI/Card'
import classes from './ProductItem.module.css'

const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
