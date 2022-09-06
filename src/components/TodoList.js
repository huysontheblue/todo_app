// viết tắt rfce
import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo,...todos]
        setTodos(newTodos);
    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos)
    }
    
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const ClearAll = () => {
        setTodos([])
    }

    return (
        <div>
            <h1>Todo-App</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            <button className='btn-clear' onClick={ClearAll}>Clear All</button>
        </div>
    )
}

export default TodoList