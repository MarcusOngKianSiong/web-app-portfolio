import { useState } from "react"

export default function Subsection(prop){
    
    const [open,setOpen] = useState(false)

    function openOrClose(){
        if(open === true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }
    
    return(
        <div>
            <h5 onClick={()=>{openOrClose()}}>{prop.title}</h5>
            {open && (<p>{prop.content}</p>)}
        </div>
    )
}