import { useEffect } from "react"
import { useState } from "react"

export default function DisplayScreenShot(prop){
    
    const [URL,setURL] = useState(null)
    
    useEffect(()=>{
        if(prop.fileDataAndFileExtension !== null){
            console.log(prop.fileDataAndFileExtension)
            const reader = new FileReader();
            reader.onload = () => {
                setURL(reader.result);
            }
            reader.readAsDataURL(prop.fileDataAndFileExtension.imageFile);
        }
        
    },[prop])

    return (
        <div>
            <img src={URL}/>
        </div>
    )
    
}
