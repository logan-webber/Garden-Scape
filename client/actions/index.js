import { getPlants, addThePlant } from '../apis/plants'

export const SET_PLANTS = 'SET_PLANTS'
export const ADD_PLANT = 'ADD_PLANTS'

export function setPlants (plants) {
  return {
      type: SET_PLANTS,
      plants: plants
  }
}

export function fetchPlants() {
    return dispatch => {
        return getPlants()
        .then(plants => {
          dispatch(setPlants(plants))
          return null
        })
      }
}

export function addOnePlant() {
  return dispatch => {
    return addThePlant()
    .then(plants => {
      dispatch(setPlants(plants))
      return null
    })
  }
}


