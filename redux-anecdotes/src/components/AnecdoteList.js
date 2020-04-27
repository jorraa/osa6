import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showInfoMessage   } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    showInfoMessage(`you voted "${anecdote.content}"`)
  }

  return <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  }


const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
    .sort((a,b) => b.votes - a.votes)
  return(
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </div>
  )
}

export default AnecdoteList