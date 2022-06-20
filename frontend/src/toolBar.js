import React from "react";
import { Button } from "@mui/material";
export function ToolBar(props){
    return (
        <>
        <Button 
            variant='contained' 
            onClick={props.emitQuery}
            sx = {{'text-transform':'none',m:'10px'}}
            size='large'
            >
                Translate!
        </Button>

        <Button 
            variant='contained' 
            color='inherit' 
            onClick={props.toggleLanguage}
            sx = {{'text-transform':'none',}}
            size='large'
            >
                Switch Language
        </Button>
        </>
        
    );
}