import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Name_age from './components/name_age/Name_age';
import ProductList from './components/product-list/ProductList';
import Counter from './components/Counter/Counter';
import Calculator from './components/Calculator/Calculator';
import CounterComm from './components/CounterComm/CounterComm';
import CounterButton from './components/CounterComm/CounterButton';
import NewTask from './components/Task/Form';
import { useState } from 'react';
import ListTask from './components/Task/ListTask';
import { nanoid } from 'nanoid';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      name: "Vaisselle",
      description: "Faire la vaisselle",
      priorité: "elevee",
      done: false
    }
  ])

  const addTask = (name, description, priority) => {
    setTasks(p => [...p, {
      id: nanoid(),
      name: name,
      description: description, 
      priority: priority,
      done: false
    }])
  }

  const finishTask = (id) => {
    console.log("finish "+id)
    setTasks (p=> p.map (t => { 
      return  {
         ...t,
         done: (t.done || t.id===id) 
        }
    
    } ) )
  }

  const deleteTask = (deleteId) => {
    console.log("delete "+deleteId)
    setTasks(p => p.filter( t => t.id!==deleteId) )
  }

  return (
    <div className="App">
      <h1>Add a new task</h1>
      <NewTask clickAdd={addTask}></NewTask>
      <h2>Task list</h2>
      <ListTask tasks={tasks} clickFinished={finishTask} clickDelete={deleteTask}></ListTask>
    </div>
  );
}

export default App;
