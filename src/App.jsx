import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Board } from './components/Board/Board'
import { useTask } from './hooks/useTask'

function App() {
  const { tasks, category, handleEnter } = useTask();
  return (
    <>
      <Board tasks={tasks} category={category} handleEnter={handleEnter} ></Board>
    </>
  )
}

export default App
