import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function ListOfPlants (props){

	return(
			<>
				<ul className='list'>
					{props.plants.map(plnt =>
					<li key={plnt.id}>
						<Link to={`/oneplant/${plnt.id}`}>{plnt.species}</Link>
					</li>)}
				</ul>
				<Link to='/'>back</Link>
			</>
	)
	}

function mapStateToProps(globalState) {
	return {
		plants: globalState.plants
	}
}


export default connect(mapStateToProps)(ListOfPlants)