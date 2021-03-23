import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteOnePlant } from '../actions/index'
import { deleteThePlant } from '../apis/plants'

function ListOfPlants (props){

 const deleteOnePlant = (id) => {
	return props.dispatch(deleteThePlant(id))
 }

	return(
			<>
				<ul className='list'>
					{props.plants.map(plnt =>
					<li key={plnt.id}>
						<button onClick={() => deleteOnePlant(plnt.id)}>
                        Delete</button>
						<Link to={`/oneplant/${plnt.id}`}>{plnt.species}</Link>
						{/* <button type='button'>delete
                    </button> */}
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