import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Alert from '@mui/material/Alert';

export function AppTitle(props){

    return (
        <Box sx={{ flexGrow: 0 }}>
        <AppBar position="fixed">
            <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Nerglish Translator
            </Typography>
            <Box>
                {props.connectionStatus ?
                <></>
                :
                <Alert variant="filled" severity='error' sx={{m:1}}>Server Disconnected</Alert>
                }
            </Box>
           
            <Typography>
                Welcome
            </Typography> 
            </Toolbar>
        </AppBar>
        </Box>
    );

}