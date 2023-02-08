import React from 'react'
import { useEffect,useState } from 'react';
import IO from 'socket.io-client';
import { TranslatorMain } from './components';
import bg from './bg.jpeg';

export default function App(){

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        window.process = {
          ...window.process,
        };
      }, []);

    useEffect(() => {
        try{
            const newSocket = IO(`http://${window.location.hostname}:5000/translate`);
            setSocket(newSocket);
            return () => newSocket.close();
        } catch(e) {
            console.log(e);
        }
    }, [setSocket]);

   
    return (
        <>
        <div className="main-container">
            <TranslatorMain
                socket={socket}
            />
        </div>
        <div style = {{width:"100%",overflow:"hidden",backgroundColor:"0xffffff"}}>
            <img style = {{width:"100%",height:"100%",top:"20px",position:"fixed",zIndex:"-1",opacity:"0.15"}} 
                src={bg}
            />
        </div>
        </>
    );
    
}