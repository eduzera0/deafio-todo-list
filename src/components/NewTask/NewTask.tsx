import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface TaskData <Array>{
    content: string;
    isCompleted: boolean;
}


export function NewTask() {

    const [task, setTask] = useState([''])

    const [nameTask, setNameTask] = useState('')

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.preventDefault();
        event.target.setCustomValidity('Este campo é obrigatório.');
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        setTask([...task, nameTask])
        setNameTask('');
    }

    function handleNewTaskNameChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNameTask(event.target.value);
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.newtask}>
            <input className={styles.label}
                placeholder="Adicione uma nova tarefa"
                onInvalid={handleNewTaskInvalid}
                onChange={handleNewTaskNameChange}
            />

            <button type='submit' className={styles.button}
            >
                Criar
                <PlusCircle />
            </button>

            
        </form>
    );
}