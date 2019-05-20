import { ADD_PET, GET_PETS } from '../actions/actions'


const initialState = {
    pets: [
      {
      "id": 1,
      "name": "nugget",
      "type": "dwarf hamster"
      }
]}

const reducer = (state = initialState, action) => {

switch(action.type){
  case ADD_PET:
      return {
        ...state,
        pets: [...state.pets, {name: action.name, type: action.type}]
      }
      case GET_PETS:
      return {
        ...state,
        pets: action.pets,
      }
  default:
  return state;
}

}
export default reducer;