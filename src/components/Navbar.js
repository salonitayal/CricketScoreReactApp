import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
    return (
        <AppBar position="static" style={{backgroundColor:"#303030"}}>
            <Toolbar>
                <Typography variant="h6" style={{fontFamily: "sans-serif"}} >IPL Score App</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
