import React, { FC } from 'react';

import classes from './Main.module.scss'
import {Container} from "@mui/material";

const Main: FC = (props) => {
    return (
        <main className={classes.main}>
            <Container>
                {props.children}
            </Container>
        </main>
    );
};

export default Main;