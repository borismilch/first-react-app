import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    padding: 0
  }
}

function TodoList ({todos}) {
  return (
    <ul style={styles.ul}>
     { todos.length ? todos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <h4 style={{margin: 0}}>No todos found</h4> }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, title: PropTypes.string, completed: PropTypes.bool }))
}

export default TodoList