import React from 'react'
import Header from "./Header"
import DineOption from "./DineOption"
import FoodOption from "./FoodOption"
import Grocerie from "./Grocerie"
import Footer from "./Footer"

function Home() {
  return (
    <>
    <Header/>
    <FoodOption/>
    <Grocerie/>
    <DineOption/>
    <Footer/>
  </>
  )
}

export default Home
