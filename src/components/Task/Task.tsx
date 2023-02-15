import { ShieldCheck, Trash } from "phosphor-react";
import styles from "./Task.module.css";


interface TaskData {
    content: string;
    isCompleted: boolean;
}

export function Task({ content, isCompleted }: TaskData) {
  return (
    <div className={styles.task}>
      <div className={styles.checkIcon}>
        <ShieldCheck color="#4EA8DE" />
      </div>

      <div className={styles.textTask}>
        <label>{content}</label>
      </div>

      <div className={styles.trashIcon}>
        <Trash color="#808080" />
      </div>
    </div>
  );
}
