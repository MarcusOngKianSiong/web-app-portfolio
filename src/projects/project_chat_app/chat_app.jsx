import { useState } from 'react'
import Chat_area from './chat_area/chat_area'
import Enter_display_name from './enter_display_name/enter_display_name'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


export default function Chat_App(){

    const navigate = useNavigate()

    const backToHomePage = () => {
        navigate("/*")
    }

    const finishedSettingName = (name) => {
        console.log(name)
        setDisplayChat(<Chat_area name={name}/>)
    }
    
    const [displayChat,setDisplayChat] = useState(<Enter_display_name finishedSettingName={finishedSettingName}/>)

    return(
        <div>
            <p onClick={()=>{backToHomePage()}}>Back to projects</p>
            {displayChat}
            
        </div>
    )
}