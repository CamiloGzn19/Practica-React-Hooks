import React from 'react'
import { Button } from 'react-bootstrap'
import useCounter from './useCounter'

const Counter = () => {

  const { counter, 
    handleAdd, 
    handleReset,
    handleSubstract } = useCounter(50)

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <Button variant='primary' onClick={handleAdd}> Sumar </Button>
        <Button variant='danger' onClick={handleSubstract}> Restar </Button>
        <Button variant='warning' onClick={handleReset}> Reset </Button>
    </div>
  )
}

export default Counter