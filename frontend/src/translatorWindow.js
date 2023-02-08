import React from "react";
import { TextField } from "@mui/material";

export function TranslatorWindow(props){

    return (
        <div>
        <TextField
          id="filled-multiline-flexible"
          label={props.default_content}
          multiline
          rows={15}
          fullWidth
          value={props.value}
          onChange={props.readOnly? ()=>{}:(e)=>props.setText(e.target.value)}
          size='large'
          InputProps={props.readOnly? {readOnly: true} : {}}
          defaultValue={(props.content!=='') ? props.content : ''}
          InputLabelProps={(props.content!=='')?{ shrink: true }:{}}
          />
        </div>
    )
}