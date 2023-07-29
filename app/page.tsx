import Announcement from '@/components/Announcement'
import Categories from '@/components/Categories'
import Collection from '@/components/Collection'
import Home from '@/components/Home'
import Product from '@/components/Product'
import React from 'react'

const page = () => {
  return (
    <>
      <Home />
      <Categories/>
      <Product/>
      <Announcement/>
      <Collection/>
    </>
  )
}

export default page