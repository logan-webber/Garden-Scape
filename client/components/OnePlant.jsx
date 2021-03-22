import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { getPlants, getThePlantById } from '../apis/plants'

function SinglePlant(props) {

	//  useEffect(() => {
	//     getPlants()
	// }, [])

	const [thePlant, setThePlant] = useState(null)


	const findMeThePlant = () => {
		setThePlant(props.plants.find(plnt => plnt.id == props.match.params.id))
	}



	useEffect(() => {
		findMeThePlant()
	}, [props.match.params.id, props.plants])

	return (
		<>
			{thePlant && (
				<>
					<h1>Here is one of many cool plants</h1>
					<p>Species: {thePlant.species}</p>
					<p>Type: {thePlant.typeOf}</p>
					<p>Countries of origin: {thePlant.origin}</p>
					<p>Humidity range: {thePlant.humidity}</p>
					<p>Temprature range: {thePlant.temprature}</p>
					<p>Ideal climate: {thePlant.climate}</p>

				</>
			)}
			<Link to='/listofplants'>back</Link>
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		plants: globalState.plants
	}
}

export default connect(mapStateToProps)(SinglePlant)