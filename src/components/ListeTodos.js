import React from 'react'
import { useSelector } from 'react-redux'
import CardTodos from './CardTodos'

const ListeTodos = () => {
    const {todos} = useSelector((state) => state)
  return (
    <div>
        {React.Children.toArray(todos.map(el=><CardTodos todos={el} />))}
    </div>
  )
}

export default ListeTodos