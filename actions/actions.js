export const ADD_PET = "ADD_PET"
export const GET_PETS = "GET_PETS"
import axios from 'axios';

const URL = "https://https://ammon-fakey.herokuapp.com/pets";

export const fetchPets = () => {
  return dispatch => {
    return axios
      .get(URL)
      .then(response => {
        // console.log("response")
        dispatch(fetchPetsSuccess(response.data))
      })
      // console.log(response)

      .catch(error => { throw error })
  }
}

export const fetchPetsSuccess = pets => (
  {
    type: GET_PETS,
    pets: pets
  }
)


export const addPet = (name, type) => {
  return dispatch => {
    return axios
      .post(URL, { name, type })
      .then(response => {
        dispatch(addPetSuccess(response.data))
        // console.log("successsss")
      })
      .catch(error => { throw error })
  }
}

export const addPetSuccess = (pet) => (
  {
    type: ADD_PET,
    pet: pet
  }
)
