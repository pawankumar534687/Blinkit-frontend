import React from 'react'
import Hero from './Hero'
import Products from './Products'

import ProductsPage from '../products/ProductsPage'
const Home = () => {
 const slug = "pan corner";
  return (
    <div className='pt-24'>
      <Hero/>
      <Products/>
     
      <ProductsPage  category="Dairy, Bread & Eggs" />
      <ProductsPage  category="Snacks & Munchies" />
      <ProductsPage  category="Cold Drinks & Juices" />
      
    </div>
  )
}

export default Home
