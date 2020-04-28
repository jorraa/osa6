//import { store } from '../store.js'

const createNotification = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: {
      content: content
    }
  }
}

const clearNotification = (content) => {
  return {
    type: 'CLEAR_NOTIFICATION',
    data: {
      content: content,
    }
  }
}

const notificationReducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      return [action.data]
    case 'CLEAR_NOTIFICATION':
      return []
  
    default:
      return state
  }
}
let timeoutID = 0
export const setNotification = (content, timeout) => {
  if(timeoutID) {
    clearTimeout(timeoutID)
  }
  return async dispatch => {
    dispatch(createNotification(content))
    timeoutID = setTimeout(() => {
      dispatch(clearNotification())
    }, timeout*1000)  
  }
}

/*export const showInfoMessage = (content, timeout) => {
  store.dispatch(createNotification(content))
  setTimeout(() => {
    store.dispatch(removeNotification(content))
  }, timeout*1000) 
}
*/

export default notificationReducer