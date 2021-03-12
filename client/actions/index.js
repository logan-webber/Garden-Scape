import { getPlants } from '../apis/plants'

export const SET_PLANTS = 'SET_PLANTS'

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
          dispatch(setWords(plants))
          return null
        })
      }
}
