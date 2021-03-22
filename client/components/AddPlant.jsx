import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addOnePlant } from '../actions/index'

function AddPlant(props) {

	const [formData, setFormData] = useState({
		species: '',
		typeof: '',
		origin: '',
		humidity: '',
		temprature: '',
		climate: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		props.dispatch(addOnePlant({ species: formData.species, typeof: formData.origin, origin: formData.origin, humidity: formData.humidity, temprature: formData.temprature, climate: formData.climate  }))
		console.log('submitted data')
	}

	const handleChange = (e) => {
		//this function below keeps the event around so that the handlechange func can use it
		//I ended up not needing to use it since my packages were out of date and after an npm i it worked again
		// e.persist()
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
					<input className='newPlant' type=' text' name='species' placeholder='species' onChange={(e) => handleChange(e)}/>
					<input className='newPlant' type=' text' name='typeOf' placeholder='typeOf' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type=' text' name='origin' placeholder='origin' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type=' text' name='humidity' placeholder='humidity' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type=' text' name='temprature' placeholder='temprature' onChange={(e) => handleChange(e)} />
					<input className='newPlant' type=' text' name='climate' placeholder='climate' onChange={(e) => handleChange(e)} />
				</label>
				<button type='submit'>Submit</button>
			</form>
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		plants: globalState.plants
	}
}

export default connect(mapStateToProps)(AddPlant)

