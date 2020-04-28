//import { store } from '../store.js'

const createNotification = (content) => {
  return {
    type: 'NEW_INFO',
    data: {
      content: content
    }
  }
}

const removeNotification = (content) => {
  return {
    type: 'REMOVE_INFO',
    data: {
      content: content,
    }
  }
}

const notificationReducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_INFO':
      return [...state, action.data]
    case 'REMOVE_INFO':
      return state.filter((n) => n.content !== action.data.content)
  
    default:
      return state
  }
}

export const setNotification = (content, timeout) => {
console.log('setNotif', content, timeout)  
  return async dispatch => {
    dispatch(createNotification(content))
    setTimeout(() => {
      dispatch(removeNotification(content))
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