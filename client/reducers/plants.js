import { SET_PLANTS, ADD_PLANTS,  } from '../actions/index'

// , GET_ONE_PLANT

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANTS:
        console.log(action.plants)
        return action.plants
    case ADD_PLANTS:
      return 
    default:
        return state
  }
}

export default reducer
