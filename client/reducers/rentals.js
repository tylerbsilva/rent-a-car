// a reducers takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state
function reduceMeta(meta=[]){
  return meta.reduce((prev,el)=>{
    prev[el.CarTypeCode] = el;
    return prev;
  }, {});
}

export default function rentals(state = {
  isFetching: false,
  didInvalidate: false,
  metaData: {},
  currentData: []
}, action){
  switch(action.type) {
    case 'REQUEST_RENTALS' :
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case 'RECEIVE_RENTALS':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        currentData: action.currentData,
        metaData: reduceMeta(action.metaData),
        lastUpdated: action.receivedAt
      }
    default :
      return state;
  }
}
