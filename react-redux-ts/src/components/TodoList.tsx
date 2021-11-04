import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {error, todos, limit, loading, page} = useTypeSelector(state => state.todo)

    const pages =  [1, 2, 3, 4, 5]

    const {setTodoPage, fetchTodos} = useActions()

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{ display: 'flex' }}>
                {pages.map(p =>
                    <div
                        key={p}
                        style={{ marginTop: '1rem', border: p === page ? '2px solid green' : '', padding: 10 }}
                        onClick={() => setTodoPage(p)}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;