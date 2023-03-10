import React, {FC} from 'react';
import './Todo.css';
import {$todos, deleteTodo, TodoType, toggleDone} from "../store/todosStore";
import {useStore} from "tiny-effector";

interface TodoProps {
    id: number;
    text: string;
    isDone: boolean;
}

export const Todo: FC<TodoProps> = ({ id, text, isDone }) => {
    const todos = useStore($todos);

    const todoDeleteHandler = () => {
        deleteTodo(id)
    }

    const todoCompleteHandler = () => {
        toggleDone(id);
    }

    return (
        <div className='todo'>
            <p>{id}. {text} {isDone ? '✔' : '✘'}</p>
            <button onClick={todoCompleteHandler}>Complete</button>
            <button onClick={todoDeleteHandler}>Delete</button>
        </div>
    );
};