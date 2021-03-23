import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addOnePlant } from '../actions/index'
import { Link, useHistory  } from 'react-router-dom'

function AddPlant(props) {

	const [formData, setFormData] = useState({
		species: '',
		typeOf: '',
		origin: '',
		humidity: '',
		temprature: '',
		climate: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		props.dispatch(addOnePlant({ species: formData.species, typeOf: formData.typeOf, origin: formData.origin, humidity: formData.humidity, temprature: formData.temprature, climate: formData.climate  }))
		console.log('submitted data')
		routeChange()
	}

	const history = useHistory()

	const routeChange = () =>{ 
		let path = `/`
		history.push(path)
	  }

	const handleChange = (e) => {
		e.persist()
		setFormData(currentFormData => {
			console.log(e)
			return {
				...currentFormData,
				[e.target.name]: e.target.value
			}
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<input className='newPlant' type='text' name='species' placeholder='species' onChange={(e) => handleChange(e)}/>
					<input className='newPlant' type=' text' name='typeOf' placeholder='typeOf' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type='text' name='origin' placeholder='origin' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type='text' name='humidity' placeholder='humidity' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type='text' name='temprature' placeholder='temprature' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type='text' name='climate' placeholder='climate' onChange={(e) => handleChange(e)} />
				</label>
				<button type='submit'>Submit</button>
				
{/* onClick={() => routeChange() */}

			</form>
			<Link to='/'>back</Link>
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		plants: globalState.plants
	}
}

export default connect(mapStateToProps)(AddPlant)

