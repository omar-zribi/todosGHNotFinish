import React from 'react'

const CardTodos = ({todos}) => {
    console.log(todos)
  return (
    <div>
        <h1> {todos.description}</h1>
    </div>
  )
}

export default CardTodos