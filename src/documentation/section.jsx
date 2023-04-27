import { useEffect, useState } from 'react'
import Image from './image'
import Subsection from './subsection'
export default function Section(prop){
    
    const [open,setOpen] = useState(false)

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
        }else{
            setOpen(true)
        }
    }

    return(
        <div >
            
            <h4 onClick={()=>{openOrClose()}}>{prop.data.title}</h4>
                {open && 
                    <Image link={prop.data.image}/>
                }
                {open && 
                    (createSubsections())
                }
        </div>
    )
}