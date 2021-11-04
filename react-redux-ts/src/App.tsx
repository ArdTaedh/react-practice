import React from 'react';
import UserList from './components/UserList';
import TodoList from "./components/TodoList";

const App: React.FC = () => {
    return (
        <div>
            <UserList />
            <TodoList />
        </div>
    );
};

export default App;