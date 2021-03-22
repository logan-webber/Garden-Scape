import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ListOfPlants from './ListOfPlants'
import OnePlant from './OnePlant'
import Home from './Home'
import { HashRouter as Router, Route } from 'react-router-dom'
import { fetchPlants } from '../actions/index'
import AddPlant from './AddPlant'

// to auto indent alt + shift + f



function App(props) {

	useEffect(() => {
		props.dispatch(fetchPlants())
	}, [])

	return (
		<>
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/listofplants' exact component={ListOfPlants} />
				<Route path='/oneplant/:id' exact component={OnePlant} />
				<Route path='/addplant' exact component={AddPlant} />
			</Router>
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		plants: globalState.plants
	}
}

export default connect(mapStateToProps)(App)

