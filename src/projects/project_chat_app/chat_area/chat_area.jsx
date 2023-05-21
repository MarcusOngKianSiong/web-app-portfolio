import { source } from '../../../back-end-functions/universalSettings.js';
import Chat_Bubble from './chat_bubble'
import NewChatter from './newChatter'
import ChatterThatLeft from './chatterThatLeft';
import { useEffect, useState } from "react"
const { io } = require("socket.io-client");

const socket = io(source);

export default function Chat_Area(prop){

    const [numberOfChatters,setNumberOfChatters] = useState(0)
    const [something,setSomething] = useState('')
    const [chatBubbles,setChatBubbles] = useState([])

    const editSomething = (e) => {
        setSomething(e.target.value); 
    }
    
    const displayCurrentChatLogs = (arr) => {
        console.log(arr)
        const currentChatLogs = [];
        arr.forEach(message=>{
            const bubble = <Chat_Bubble message={`${message.username}: ${message.message}`}/>; 
            currentChatLogs.push(bubble); 
        })
        setChatBubbles(currentChatLogs);
    }

    const indicateLeaver = (username) => {
        console.log("CHATTER HAS LEFT THE ROOM!!! -> ",username)
        setChatBubbles(prev=>[...prev,<ChatterThatLeft name={username}/>])
    }

    const updateChatBubble = (newMessage) => {
        console.log('UPDATING CHAT BUBBLE.....')
        setChatBubbles(prevChatBubbles => [...prevChatBubbles, <Chat_Bubble message={newMessage}/>]);
    }

    const indicateNewChatter = (name) => {
        console.log("NEW CHATTER HAS ENTERED THE ROOM!!!")
        setChatBubbles(prev=>[...prev,<NewChatter name={name}/>])
    }

    const sendMessage = (e) => {
        if (e.keyCode === 13){
            console.log("SENDING DATA.....")
            socket.emit('new message',something);
        }
    }

    useEffect(()=>{

        socket.on('connection');
        socket.emit('username',prop.name)
        
        socket.on('update chat',(message)=>{
            const fullMessage = `${message.username}: ${message.message}`
            updateChatBubble(fullMessage);
        })
        
        socket.on('get chat logs',(chatlogs)=>{
            displayCurrentChatLogs(chatlogs)
        })

        socket.on('show new chatter',(username)=>{
            indicateNewChatter(username)
        })

        socket.on('chatter that left',(username)=>{
            indicateLeaver(username)
        })

        socket.on('change participant number',(number)=>{
            setNumberOfChatters(number)
        })

    },[])

    

    return(
        <div>
            <p>Number of participants: {numberOfChatters}</p>
            <p>Name: {prop.name}</p>
            <div>
                {chatBubbles}
            </div>
            <input type='text' value={something} onChange={editSomething} onKeyDown={sendMessage}/>
        </div>
    )
}

