import React, {useState} from 'react';
import {useStore} from "tiny-effector";
import {$todos, addTodo, TodoType} from "../store/todosStore";
import {Todo} from "./Todo";

export const Todos = () => {
    const [value, setValue] = useState('');
    const todos = useStore($todos);

    const clickHandler = () => {
        const todo = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
            text: value,
            isDone: false
        }
        addTodo(todo);
        setValue('');
    }

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" value={value} onChange={handleValueChange} />
                <button type="submit" onClick={clickHandler}>Добавить</button>
            </div>
            {
                todos.map((todo: TodoType) => (
                    <Todo key={todo.id} id={todo.id} text={todo.text} isDone={todo.isDone} />
                ))
            }
        </div>
    );
};