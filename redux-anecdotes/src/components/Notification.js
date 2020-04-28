import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return !props.notification ? null: (
    <div style={style}>
      {props.notification.content}
    </div>
  )  
}

const mapStateToProps = (state) => {
  const notification = state.notifications.length>0 
    ? state.notifications[0] 
    : null 
  return {
    notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps
)(Notification)

export default ConnectedNotification