import { ShieldCheck, Trash } from "phosphor-react";
import styles from "./Task.module.css";


interface TaskData {
    content: string;
    isCompleted: boolean;
    handleRemove: () => void;
    handleClose: () => void;
}

export function Task({ content, isCompleted, handleRemove, handleClose }: TaskData) {
  return (
    <div className={isCompleted ? styles.taskFinished : styles.task}>
      <div className={styles.checkIcon}
        onClick={handleClose}
      >
        <ShieldCheck color={isCompleted ? "#008000" : "#5e60ce"} />
      </div>

      <div className={styles.textTask}>
        <label>{content}</label>
      </div>

      <div className={styles.trashIcon}
        onClick={handleRemove}
      >
        <Trash color="#808080" />
      </div>
    </div>
  );
}
