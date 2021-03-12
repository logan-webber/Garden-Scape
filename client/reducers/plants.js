import { SET_PLANTS } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANTS:
        console.log(action.plants)
        return action.plants
    default:
        return state
  }
}

export default reducer
