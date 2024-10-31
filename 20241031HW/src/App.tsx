import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MapTest from './MapTest';
import Timer from './Timer'
import Clock from './Clock'

function App() {
  return (
    <div className = "container">
      <TodoList></TodoList>
      <Timer />
      <Clock />
    </div>
  )
}

export default App;
