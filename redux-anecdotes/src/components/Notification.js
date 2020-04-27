import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notifications = useSelector(state => 
    state.notifications)
  
  const notification = notifications.length>0 ? notifications[0] : null 

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return !notification ? null: (
    <div style={style}>
      {notification.content}
    </div>
  )
}

export default Notification