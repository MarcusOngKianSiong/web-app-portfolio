import { useEffect, useState } from 'react'
import Image from './image'
import Subsection from './subsection'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Section(prop){
    
    const [open,setOpen] = useState(false)
    const [triangle,setTriangle] = useState("▶")

    function createSubsections(){
        const sections = []
        prop.data.subsections.forEach(subsection=>{
            const subsec = <Subsection title={subsection.title} content={subsection.content} data={subsection}/>
            sections.push(subsec)
        })
        return sections
    }
    
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
        <div className=' d-flex flex-column' style={{minWidth: '50%',width: '50%'}}>
            
                
                <h3 onClick={()=>{openOrClose()}} className='m-3'>{triangle} {prop.data.title}</h3>
            
            
                {open && 
                    <Image link={prop.data.image}/>
                }
                {open && 
                    (createSubsections())
                }
        </div>
    )
}