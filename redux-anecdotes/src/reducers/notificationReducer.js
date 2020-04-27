import { store } from '../store.js'

const notificationAtStart = [
  /*{
    content: 'Start reading anecdotes',
  }
  */  
]

export const createNotification = (content) => {
  return {
    type: 'NEW_INFO',
    data: {
      content: content
    }
  }
}

export const removeNotification = (content) => {
  return {
    type: 'REMOVE_INFO',
    data: {
      content: content,
    }
  }
}

const notificationReducer = (state = notificationAtStart, action) => {
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

export const showInfoMessage = (content) => {
  store.dispatch(createNotification(content))
  setTimeout(() => {
    store.dispatch(removeNotification(content))
  }, 5000) 
  
}

export default notificationReducer