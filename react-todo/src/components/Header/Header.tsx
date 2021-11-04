import React from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";

import classes from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <AppBar
            className={classes["MuiAppBar-root"]}
        >
            <Toolbar className={classes['MuiToolbar-root']}>
                <Container>
                    <div className={classes["header-wrapper"]}>
                        <Typography
                            className={classes['header-logo']}
                            variant="h4"
                        >
                            ToDo Manager
                        </Typography>
                        <div className="header-actions">
                            <Button color="inherit">
                                Add ToDo
                            </Button>
                        </div>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;