import { Header } from './components/Header/Header';
import { NewTask } from './components/NewTask/NewTask';
import './global.css';

import styles from './App.module.css';
import { TaskList } from './components/TaskList/TaskList';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask />
          
          <TaskList />

        </main>
      </div>
    </div>
  )
}

export default App
