import React from 'react'
import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DEFAULT_PRODUCTS = [
  {
    id: 'a001',
    price: 60,
    title: 'First book',
    description: 'xxxxxxx'
  },
  {
    id: 'a002',
    price: 50,
    title: 'Second book',
    description: 'yyyyyyyyy'
  },
  {
    id: 'a003',
    price: 30,
    title: 'Third book',
    description: 'zzzzzzzz'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DEFAULT_PRODUCTS.map(({ title, price, description, id }) => {
          return (
            <ProductItem
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Products
