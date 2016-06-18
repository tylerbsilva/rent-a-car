// import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const REQUEST_RENTALS = 'REQUEST_RENTALS'
export function requestRentals() {
  return {
    type: REQUEST_RENTALS
  }
}

export const RECEIVE_RENTALS = 'RECEIVE_RENTALS'
export function receiveRentals(json, meta) {
  return {
    type: RECEIVE_RENTALS,
    currentData: json,
    metaData: meta,
    receivedAt: Date.now()
  }
}

export const FETCH_RENTALS = 'FETCH_RENTALS'
export function fetchRentals(data) {
  let url = '/api/rentals?';
  for (var key in data) {
    if (url != "") {
        url += "&";
    }
    url += key + "=" + data[key];
  }
  return dispatch => {
    dispatch(requestRentals())
    return axios.get(url)
      .then(e => e.data)
      .then(json => dispatch(receiveRentals(json.Result, json.MetaData.CarMetaData.CarTypes)))
  }
}

export function shouldFetchRentals(state) {
  const rentals = state.rentals
  if (!rentals.data.length) {
    return true
  } else if (rentals.isFetching) {
    return false
  } else {
    return rentals.didInvalidate
  }
}

export function fetchRentalsIfNeeded() {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.
  // This is useful for avoiding a network request if
  // a cached value is already available.
  return (dispatch, getState) => {
    if (shouldFetchRentals(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchRentals())
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}
