import styles from './TaskList.module.css';
import { ShieldCheck, Trash } from 'phosphor-react';
import { Task } from '../Task/Task';

const tasks = [
    {
      id: 1,
      content: 'Finalziar o desafio 1 de React',
      isCompleted: false,
    },
    {
      id: 2,
      content: 'Estudar React pelo menos 2 horas por dia',
      isCompleted: false,
    },
    {
      id: 3,
      content: 'Zerar o jogo Hogwarts Legacy',
      isCompleted: true,
    }
  ]  

export function TaskList() {
    return (
        <div className={styles.box}>
            <div className={styles.conters}>

                <div className={styles.header}>
                    <div className={styles.createdTasks}>
                        <strong>Tarefas Criadas</strong>
                        <span> 3</span>
                    </div>

                    <div className={styles.completedTasks}>
                        <strong>Concluídas</strong>
                        <span> 2</span>
                    </div>
                </div>

                {tasks.map((task) => {
                    return (
                        <Task 
                            key={task.id}
                            content={task.content}
                            isCompleted={task.isCompleted}
                        />
                    )
                })}

            </div>
        </div>
    );
}