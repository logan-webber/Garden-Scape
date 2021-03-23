import { SET_PLANTS, ADD_PLANTS, DELETE_PLANTS } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANTS:
        console.log(action.plants)
        return action.plants
    case ADD_PLANTS:
        return [...state, {id: action.id, species: action.species, typeOf: action.typeOf, origin: action.origin, humidity: action.humidity, temprature: action.temprature, climate: action.climate }]
    case DELETE_PLANTS:
      return state.map(word => word.id === action.id)
    default:
        return state
  }
}

export default reducer
