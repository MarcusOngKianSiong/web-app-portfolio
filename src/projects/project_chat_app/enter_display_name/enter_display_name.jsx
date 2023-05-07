import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import { useState,useEffect } from 'react';

export default function Enter_Display_Name(prop){

    const [name,setName] = useState('');

    const editName = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    useEffect(() => {
        console.log(name);
      }, [name]);

    return(
        <div>
            <h4>Welcome to the chat area project!</h4>
            <h6>ENter display name</h6>
            
            <input type='text' value={name} onChange={editName}/>
            <Button onClick={()=>{prop.finishedSettingName(name)}} variant="primary">Enter</Button>
        </div>
    )
}