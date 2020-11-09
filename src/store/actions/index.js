import axios from "axios";

export const submitSearch = search => {
  return dispatch => {
    dispatch({type: "SEARCH_START", payload: search})
    axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10163371696990125/search/${search}`)
    .then(res => {
      if(res.data.error){
        dispatch({type: 'SEARCH_ERR', payload: res.data.error })
      } else {
        dispatch({type: 'SEARCH_SUCC', payload: res.data.results})
      }
    })
    .catch(error => console.log(error.message))
  }
}