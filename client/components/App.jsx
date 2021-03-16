import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ListOfPlants from './ListOfPlants'
import Home from './Home'



function App () {
  
  return (
    <>
      <Home/>
      <ListOfPlants/>
    </>
  )
}

export default App

