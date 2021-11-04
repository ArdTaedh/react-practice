import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    countReducer,
    incrementCreator,
    decrementCreator,
    asyncIncrementCreator,
    asyncDecrementCreator
} from "./store/countReducer";
import {fetchUserAction} from "./store/userReducer";


const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)

    return (
        <>
            <div className="count">{count}</div>
            <div className="buttons">
                <button onClick={() => dispatch(asyncIncrementCreator())}>Increment</button>
                <button onClick={() => dispatch(asyncDecrementCreator())}>Decrement</button>
                <button onClick={() => dispatch(fetchUserAction())}>Get users</button>
            </div>
            <div className="users">
                {users.map(user =>
                    <div className="user">
                        {user.name}
                    </div>
                )}
            </div>
        </>
    );
};

export default App;