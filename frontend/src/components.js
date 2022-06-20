import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CONSOLE_DEBUG } from './settings';
import { AlertBox } from './alertBox';
import {AppTitle} from './appBar'
import {TranslatorWindow} from './translatorWindow'
import { Typography } from '@mui/material';
import {ToolBar} from './toolBar'
import {Footer} from './utils'


export function TranslatorMain(props) {

    const [text, setText] = useState('');
    const [translation, setTranslation] = useState('');
    const [isEnglish, setIsEnglish] = useState(true);
    const [AlertList, setAlertList] = useState([]);

    function addAlert(error, severity){
        setAlertList(AlertList=>[...AlertList,{message:error,severity:severity}]);
    }

    function removeAlert(index){
        if (CONSOLE_DEBUG) console.log("removing alert index:",index);
        setAlertList(AlertList=>AlertList.filter((item,i) => i !== index));
    }

    function toggleLanguage(){
        setTranslation('');
        setIsEnglish(!isEnglish);
    }

    useEffect(() => {

        if (!props.socket){
            if (CONSOLE_DEBUG) console.log("No socket");
            return;
        }
        
        const responseHandler = (message)=>{
            if (CONSOLE_DEBUG) console.log("get WS message, ",message);
            props.socket.emit("Response 200")
            var data = message.data;
            if (data==="Connected"){
                addAlert("Connected to server","success");
                if (CONSOLE_DEBUG) console.log("Connected");
            }
        } 

        const resultsHandler = (message)=>{
            var success = message.success;
            var content = message.content;
            if (CONSOLE_DEBUG) console.log("got Translation, ",message);
            if (success)
                setTranslation(content);
            else {
                addAlert(content,'error');
            }
        }

        props.socket.on('response', responseHandler);
        props.socket.on('results', resultsHandler);
    
        return () => {
            props.socket.off('response', responseHandler);
            props.socket.off('results', resultsHandler);
        };
    }, [props.socket]);

    function emitQuery(){
        if (CONSOLE_DEBUG) console.log('emitting query',text);
        props.socket.emit(
                'query',
                {
                    isEnglish: isEnglish,
                    content: text
                }
        );
    }

    return (
        <>
        <AppTitle
            addAlert={addAlert}
            connectionStatus={props.socket?props.socket.connected:false}
        />
        <AlertBox errors={AlertList} removeAlert={removeAlert}/>
        <div className='func-wrapper' style={{top:'60px',width:'95%',position:'absolute',minHeight:'100px',margin:'2.5%'}}>
            <div className='input-left' style={{width:'48%',float:'left',margin:'1%'}}>
                <Typography variant='h5'sx={{mb:'10px'}}>
                    {isEnglish ? 'English' : 'Nerglish'}
                </Typography>
                <TranslatorWindow default_content={'Input'} setText={setText} content={text}/>
            </div>
            <div className='output-right' style={{width:'48%',float:'right',margin:'1%'}}>
                <Typography variant='h5' sx={{mb:'10px'}}>
                    {isEnglish ? 'Nerglish' : 'English'}
                </Typography>
                <TranslatorWindow default_content={'Results (read only)'} content={translation} readOnly={true}/>
            </div>
            <ToolBar
                emitQuery={emitQuery}
                toggleLanguage={toggleLanguage}

            />
        </div>
        <Footer/>
        </>
    )
}
