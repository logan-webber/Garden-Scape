import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addOnePlant } from '../actions/index'

function AddPlant (props){

const [ formData, setFormData ] = useState({
    species: '',
    typeof: '',
    origin: '',
    humidity: '',
    temprature: '',
    climate: ''
})





    return(
        <>

        </>
    )
}

function mapStateToProps(globalState) {
    return {
        plants: globalState.plants
    }
}

export default connect(mapStateToProps)(AddPlant)

