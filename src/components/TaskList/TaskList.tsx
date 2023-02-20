import styles from "./TaskList.module.css";
import { ShieldCheck, Trash, ClipboardText } from "phosphor-react";
import { Task } from "../Task/Task";
import { Key, useState } from "react";

const tasks = [
  {
    id: 1,
    content: "Finalziar o desafio 1 de React",
    isCompleted: false,
  },
  {
    id: 2,
    content: "Estudar React pelo menos 2 horas por dia",
    isCompleted: false,
  },
  {
    id: 3,
    content: "Zerar o jogo Hogwarts Legacy",
    isCompleted: true,
  },
];

export function TaskList({ tasks, setTasks }: any) {
  const [closedTasks, setClosedTasks] = useState(0);

  function removeTask(index: number) {
    const newTaskList = [...tasks];
    newTaskList.splice(index, 1);
    setTasks(newTaskList);
  }

  function closeTask(index: number) {
    const newTaskList = tasks.map((task: { isCompleted: any; id: any; content: any; }, taskListIndex: number) => {
      if (taskListIndex === index) {
        if (task.isCompleted) {
          setClosedTasks((currentValue) => currentValue - 1);
        } else {
          setClosedTasks((currentValue) => currentValue + 1);
        }
        return {
          id: task.id,
          content: task.content,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTaskList);
  }

  return (
    <div className={styles.box}>
      <div className={styles.conters}>
        <div className={styles.header}>
          <div className={styles.createdTasks}>
            <strong>Tarefas Criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
            { tasks.length > 0 ?
              <span>{closedTasks} de {tasks.length}</span>
              :
              <span>{closedTasks}</span>
            }

          </div>
        </div>

        {tasks.length > 0 ? (
          tasks.map((task: { id: Key | null | undefined; content: string; isCompleted: boolean; }, index: number) => {
            return (
              <Task
                key={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
                handleRemove={() => removeTask(index)}
                handleClose={() => closeTask(index)}
              />
            );
          })
        ) : (
          <div className={styles.noTaskList}>
            <ClipboardText className={styles.clipboard} size={56} />
            <div className={styles.textNoList}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <h3>Crie tarefas e organize seus itens a fazer</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
