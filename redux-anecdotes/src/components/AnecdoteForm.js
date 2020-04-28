import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const newAnecdote = {
      content: event.target.content.value,
      votes: 0
    }
    event.target.content.value = ''
    props.createAnecdote(newAnecdote)
    props.setNotification(`${newAnecdote.content} created`, 10)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="content" />
        <button>create</button>
      </form>
    </div>
  )
}

export default connect(
  null, 
  {createAnecdote, setNotification}
)(AnecdoteForm)