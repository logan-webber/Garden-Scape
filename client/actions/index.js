import { getPlants } from '../apis/plants'

export const SET_PLANTS = 'SET_PLANTS'
export const GET_ONE_PLANT = 'GET_ONE_PLANT'

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

export function getOnePlant (plants, id) {
  return {
    
  }
}
