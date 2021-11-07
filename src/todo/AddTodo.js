import React, {useState, useContext} from 'react'
import Context from '../context'

function useInputValue(defaultVal = '') {
  const [value, setValue] = useState(defaultVal)

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo () {
  const input = useInputValue('')
  const { addTask } = useContext(Context)

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(input.value())
    input.clear()
  }

  return(
    <form onSubmit={(e) =>submitHandler(e)}>
      <input {...input.bind} />
      <button type='submit' style={{marginLeft: 15}}>Add new todo</button>
    </form>
  )
}

export default AddTodo