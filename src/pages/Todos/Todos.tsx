import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './Todos.scss'
import {fetchTodos, fetchTodosWithParams} from "../../acynsActions";
import {useDispatch, useSelector} from "react-redux";
import {ITodos} from "../../types/types";

interface ITodo {
  todosReducer: ITodos[];
}

const Todos: FC = () => {
  const dispatch: any = useDispatch()
  const todos = useSelector((state: ITodo) => state.todosReducer)
  const [value, setValue] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const _todos = todos.map(item => item.project.name)
  const _filterTodo = [...new Set(_todos)]

  const filterTodo = _filterTodo.filter(item => {
      return item.toLowerCase().includes(value.toLowerCase())
    }
  )

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value.length > 2) setIsOpen(!isOpen)
  }

  const HandleClick = (e: any) => {
    dispatch(fetchTodosWithParams(e.target.textContent.toLowerCase()))
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch, value])

  return (
    <div className={'container'}>
      <div className="todos">
        <input onChange={HandleChange} value={value} type="text" placeholder={'Search...'}/>
        <ul className="autocomplete">
          {value.length > 2 && isOpen ?
            filterTodo.map((item, index) => {
              return <li onClick={HandleClick} key={index} className={'autocomplete__item'}>{item}</li>
            }) : null}
        </ul>
        <table className={'todos__table'}>
          <tbody>
          {todos?.map((item: any) => {
            return (
              <tr className={'todos__table-tr'} key={item.id}>
                <th className={'todos__table-th'}>{item.id}</th>
                <td className={'todos__table-td'}>{item.summary}</td>
                <td className={'todos__table-td'}>{item.project.name}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;