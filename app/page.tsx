import Announcement from '@/components/Announcement'
import Banner from '@/components/Banner'
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
      {/* <Banner/> */}
    </>
  )
}

export default page