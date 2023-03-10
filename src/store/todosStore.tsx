import { createStore, createEvent } from "tiny-effector";

export interface TodoType {
    id: number;
    text: string;
    isDone: boolean;
}

const initialTodos: TodoType[] = [{
    id: 1,
    text: 'build effector',
    isDone: false
}]

export const $todos = createStore(initialTodos);
export const addTodo = createEvent<TodoType[]>();
export const deleteTodo = createEvent<TodoType[]>();
export const toggleDone = createEvent<TodoType[]>();

$todos
    .on(addTodo, (state, todo) =>  [...state, todo])
    .on(deleteTodo, (state, id) => state.filter((todo) => todo.id !== id))
    .on(toggleDone, (state, id) => {
        const stateCopy = [...state];
        stateCopy.forEach(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
            }
        })
        return [...stateCopy];
    })