import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react"


export default function Groups(prop){
    console.log("GROUP ELEMENT: ",prop.data)
    // Expected inputs 
    const [displayContents,setDisplay] = useState({display: 'none',icon: '▶️'})
    const showContents = () => {
        if(displayContents.display === 'none'){
            setDisplay({display: '',icon: '▼'})
        }else{
            setDisplay({display: 'none',icon: '▶️'})
        }    
    }

    const createGroupItems = () => {
        const items = []
        const length = prop.data.length;
        for(let i = 0; i < length; i++){
            const checkState = prop.data[i].state;
            const id = prop.data[i].id
            console.log(id)
            items.push(
                <div id={id} className='d-flex  justify-content-start align-items-center'>
                    <div className=''>
                        <input type='checkbox' checked={checkState} className=' m-2' onChange={()=>{prop.changeDisplayState(id)}}/>
                    </div>
                    <div className=' d-flex flex-grow-1 align-items-center'>
                        <p className=' flex-grow-1 mt-3'>{prop.data[i].data.name}</p>
                    </div>
                </div>

            )
        }
        return items
    }
    return(
        <div>
                <h3 onClick={()=>{showContents()}}>{displayContents.icon} {prop.groupName}</h3>
                <div style={{display: displayContents.display}}>
                    {createGroupItems()}
                </div>
        </div>
    )
}


/*
    How would I make it such that when I press the checkbox, I will change what is being displayed in the details panel?
    1. Command module at the top that determines what is shown. 
    2. Command module gets transported to the group element, which determine what is being checked.
    3. Command module determines the data that is being passed to the details panel. 
*/