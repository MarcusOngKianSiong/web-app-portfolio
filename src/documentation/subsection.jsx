import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Subsection(prop){
    
    const [open,setOpen] = useState(false)

    const [triangle,setTriangle] = useState("▶")

    function openOrClose(){
        if(open === true){
            setOpen(false)
            setTriangle("▶")
        }else{
            setOpen(true)
            setTriangle("▼")
        }
    }
    
    return(
        <div className="m-1">
            <div className="d-flex">
                <p style={{marginRight: '1%'}}>{triangle}</p>
                <h5 onClick={()=>{openOrClose()}}>{prop.title}</h5>
            </div>
            
            {open && (<p>{prop.content}</p>)}
        </div>
    )
}