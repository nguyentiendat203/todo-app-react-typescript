import { TotoType } from '../App'
import Todo from './Toto'

function TodoList({ listTodo, setListTodo }: { listTodo: TotoType[]; setListTodo: React.Dispatch<React.SetStateAction<TotoType[]>> }) {
  return (
    <>
      {listTodo?.length > 0 &&
        listTodo.map((todo) => {
          return <Todo key={todo.id} name={todo.name} setListTodo={setListTodo} todoId={todo.id} />
        })}
    </>
  )
}

export default TodoList
