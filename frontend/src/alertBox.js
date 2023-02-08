import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { Stack } from "@mui/material";
import { useEffect } from "react";

export function AlertBox(props) {
    const {errors, removeAlert} = props;
    return (
        <Stack spacing={0}
        style={{
            position: "fixed",
            top: "70px",
            left:"50%",
            transform:"translateX(-50%)",
            zIndex:"9999"
        }}>
            {errors.map((error, index) => (
                <AlertItem key={index} index={index} error={error.message} severity={error.severity} removeAlert={props.removeAlert}/>
            ))}
        </Stack>
    );

}

function AlertItem(props){
    const { error,severity,removeAlert } = props;
    const [ open,setOpen ] = useState(true);

    function handleClose(event){
        setOpen(false);
        //props.removeAlert(props.index)
    }   

    //set open to false after 10 seconds
    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, 10000);
    }, [setOpen]);

    return (
    <Collapse in={open}>
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="error.main"
        color="error.contrastText"
        sx={{m:1}}
        >
        <Alert variant="filled" severity={severity} onClose={handleClose} sx={{width:"500px"}}>
            {error}
        </Alert>
        </Box>
    </Collapse>
    );

}