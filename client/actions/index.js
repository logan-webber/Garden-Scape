import { getPlants, addThePlant } from '../apis/plants'

export const SET_PLANTS = 'SET_PLANTS'
export const ADD_PLANTS = 'ADD_PLANTS'

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

export function addOnePlant(plant) {
  return dispatch => {
    return addThePlant(plant)
    .then(() => {
      dispatch(fetchPlants())
      return null
    })
  }
}


