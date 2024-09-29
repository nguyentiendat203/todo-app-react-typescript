import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export type TotoType = {
  id: string
  name: string
}

function App() {
  const [listTodo, setListTodo] = useState<TotoType[]>(() => {
    const dataLocalStr = JSON.parse(localStorage.getItem('listTodo') || '[]')
    if (dataLocalStr?.length > 0) {
      return dataLocalStr
    }
    return []
  })
  const [todoName, setTodoName] = useState('')

  const handleAddToto = () => {
    const newTodo: TotoType = {
      id: uuidv4(),
      name: todoName
    }

    setListTodo([...listTodo, newTodo])
    setTodoName('')
  }

  useEffect(() => {
    localStorage.setItem('listTodo', JSON.stringify(listTodo))
  }, [listTodo])

  return (
    <>
      <div style={{ width: '300px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '10px' }}>To do app</h1>
        <AddTodo todoName={todoName} setTodoName={setTodoName} handleAddToto={handleAddToto} />
        <TodoList listTodo={listTodo} setListTodo={setListTodo} />
      </div>
    </>
  )
}

export default App
