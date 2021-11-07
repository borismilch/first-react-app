import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
   
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem ({todo}) {
  const { toggleTask, removeTask } = useContext(Context) 
  const classes = []

  if (todo.completed) { classes.push('completed') }
  return (
    <li style={styles.li} className='TodoItem'>

      <span className={classes.join(' ')}>
        <input value={todo.completed} onChange={() => toggleTask(todo.id)} style={styles.input} type="checkbox" />
        <strong>{todo.id}</strong>
        {todo.title}
      </span>
      
      <button onClick = {() => removeTask(todo.id) } className='rm'>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({id: PropTypes.number, title: PropTypes.string, completed: PropTypes.bool})
}

export default TodoItem