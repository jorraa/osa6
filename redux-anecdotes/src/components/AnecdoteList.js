import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  const dispatch = useDispatch()
  return <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
      </div>
    </div>
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
    .sort((a,b) => b.votes - a.votes)
  return(
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote anecdote={anecdote}/>
      )}
    </div>
  )
}

export default AnecdoteList