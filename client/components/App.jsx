import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import ListOfPlants from './ListOfPlants'
import OnePlant from './OnePlant'
import Home from './Home'
import { HashRouter as Router, Route } from 'react-router-dom'



function App () {
  
  return (
    <>
			<Router>
				<Route path='/' exact component={Home}/>
				<Route path='/listofplants' exact component={ListOfPlants}/>
				<Route path='/oneplant/:id' exact component={OnePlant}/>
			</Router>
    </>
  )
}

export default App

