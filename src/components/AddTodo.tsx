import { TextField } from '@mui/material'
import Button from '@mui/material/Button'

type Props = {
  todoName: string
  setTodoName: React.Dispatch<React.SetStateAction<string>>
  handleAddToto: () => void
}

function AddTodo({ todoName, setTodoName, handleAddToto }: Props) {
  return (
    <div>
      <TextField label='work' value={todoName} size='small' style={{ marginRight: '8px' }} onChange={(e) => setTodoName(e.target.value)} />
      <Button variant='contained' onClick={handleAddToto}>
        Thêm
      </Button>
    </div>
  )
}

export default AddTodo
