import React, {FC} from 'react';

import classes from './Todos.module.scss'
import {Card} from "@mui/material";

const Todos: FC = () => {
    return (
        <Card className={classes.todos}>
            Todos
        </Card>
    );
};

export default Todos;