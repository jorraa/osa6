import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showInfoMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const newAnecdote = {
      content: event.target.content.value,
      votes: 0
    }
    event.target.content.value = ''
    await dispatch(createAnecdote(newAnecdote))
    showInfoMessage(`${newAnecdote.content} created`)
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

export default AnecdoteForm