import { Button } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import { TotoType } from '../App'

function Todo({ name, setListTodo, todoId }: { name: string; todoId: string; setListTodo: React.Dispatch<React.SetStateAction<TotoType[]>> }) {
  const hanldeDeleteTodo = (todoId: string) => {
    setListTodo((prev) => {
      return prev.filter((todo) => todo.id !== todoId)
    })
  }
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button variant='text' fullWidth style={{ justifyContent: 'space-between' }}>
          {name}
        </Button>
        <div onClick={() => hanldeDeleteTodo(todoId)}>
          <CancelIcon style={{ cursor: 'pointer', color: 'red' }} />
        </div>
      </div>
    </>
  )
}

export default Todo
