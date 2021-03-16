import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/index'
import { Link } from 'react-router-dom'

function ListOfPlants (props){

	useEffect(() => {
			props.dispatch(fetchPlants())
	}, [])

	return(
			<>
				<ul className='list'>
					{props.plants.map(plnt =>
					<li key={plnt.id}>
						{plnt.species}
					</li>)}
				</ul>
			</>
	)
	}

function mapStateToProps(globalState) {
	return {
		plants: globalState.plants
	}
}


export default connect(mapStateToProps)(ListOfPlants)