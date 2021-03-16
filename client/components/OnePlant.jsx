import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPlants, getThePlantById } from '../apis/plants'

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
					<p>{thePlant.species}</p>
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