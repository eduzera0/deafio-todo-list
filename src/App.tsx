import { Header } from './components/Header/Header';
import { NewTask } from './components/NewTask/NewTask';
import './global.css';

import styles from './App.module.css';
import { TaskList } from './components/TaskList/TaskList';
import { FormEvent, useState } from 'react';
import { Footer } from './components/Footer/Footer';

function App() {

  const [tasks, setTasks] = useState([])

  function handleCreateNewTask(event: FormEvent, nameTask: string){
    event.preventDefault();
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    const newTasks = [...tasks, {
        id,
        content: nameTask,
        isCompleted: false,
    }]
    setTasks(newTasks)
}

  console.log(tasks)
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask
            handleCreateNewTask={handleCreateNewTask}
          />

          <TaskList
            tasks={tasks}
            setTasks={setTasks}
          />

        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
