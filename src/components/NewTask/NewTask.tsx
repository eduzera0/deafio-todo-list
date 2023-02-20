import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface TaskData<Array> {
  content: string;
  isCompleted: boolean;
}

export function NewTask({ handleCreateNewTask }: any) {
  const [nameTask, setNameTask] = useState("");

  function handleNewTaskNameChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNameTask(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    handleCreateNewTask(event, nameTask);
    setNameTask("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.newtask}>
      <input
        className={styles.label}
        placeholder="Adicione uma nova tarefa"
        required
        onChange={handleNewTaskNameChange}
        value={nameTask}
      />

      <button type="submit" className={styles.button}>
        Criar
        <PlusCircle className={styles.plusCircle} />
      </button>
    </form>
  );
}
