import { useEffect, useState, useRef } from "react"
import { useNavigate } from 'react-router-dom';
import DisplayScreenShot from "./displayScreenshot";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { savesnapshotandgetsharablelink } from "../../back-end-functions/retrieveData.js";

export default function SnapshotToSharableLink(){
        
        const navigate = useNavigate()
        const [displayControls,setDisplayControls] = useState('none')
        const [image,setImage] = useState(null);
        const [name,setName] = useState('');
        const [displayLink,setDisplayLink] = useState('none');
        const [link,setLink] = useState('');
        const copyRef = useRef(null);

        const backToHomePage = () => {
            navigate('/')
        }

        const editName = (e) => {
            setName(e.target.value)
        }
        
        const handlePaste = (e) => {
            console.log("PASTING..")
                const items = e.clipboardData.items;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item.type.indexOf('image') === 0) {
                        const blob = item.getAsFile();
                        setImage(blob)
                    }
                }
        }
        
        const acceptOrReject = (status) => {
            if(status === 'accept'){
                // Assuming that there are only two values
                const extension = image.name.split('.')[1]
                const newName = name+'.'+extension
                const imageCopy = new File([image], newName, { type: image.type });;
                // Get imageCopy to google servers...
                console.log("File object: ",imageCopy)
                const formData = new FormData()
                formData.append('image',imageCopy)
                console.log("Form data: ",formData)
                savesnapshotandgetsharablelink(formData).then(res=>{
                    console.log("Link: ",res)
                    setDisplayLink('')
                    setDisplayControls('none')
                    setLink(res.link)
                })
            }
            if(status === 'reject'){
                setImage(null)
                setName('')
                setDisplayControls('none')
            }
            if(status === 'refresh'){
                // refresh specific
                setLink('')
                setDisplayLink('none')
                // Same as 'reject'
                setImage(null)
                setDisplayControls('none')
                setName('')
            }
        }

        const copyToClipboard = () => {
            const sharableLink = link;
            console.log(sharableLink);
            navigator.clipboard.writeText(sharableLink)
        }
        
        useEffect(()=>{
            // 
        },[])

        useEffect(()=>{
            if(image){
                if(image.name){
                    // expect only two values at the end.
                    const justTheName = image.name.split('.');
                    setName(justTheName[0]);
                    setDisplayControls('');
                }
            }
        },[image])
    
        return(
            <div className="d-flex flex-column justify-content-center align-items-center p-3">

                <p onClick={()=>{backToHomePage()}}>Back to projects</p>

                <h2 className="text-center">Screenshot to sharable link for <br></br>obsidian images</h2>
                
                <div className="d-flex m-5 d-flex justify-content-center">
                    <DisplayScreenShot  image={image} handlePaste={handlePaste}/>
                </div>
                    
                    <div style={{display: displayControls}} className="">
                        <div className="p-2">
                            <h4>file name</h4>
                            <input className="" type="text" value={name} onChange={(e)=>{editName(e)}}/>
                        </div>
                        
                        <Button className="m-2" onClick={()=>{acceptOrReject('accept')}}>Accept</Button>
                        <Button onClick={()=>{acceptOrReject('reject')}}>Reject</Button>
                    </div>
                    <div style={{display: displayLink}}>
                        <h4>Sharable Link</h4>
                        <p className="m-2"><b>{link}</b></p>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <Button className="m-2 w-25" onClick={()=>{copyToClipboard()}}>Copy to clipboard</Button>
                            <Button className="" onClick={()=>{acceptOrReject('refresh')}}>Refresh</Button>
                        </div>
                        
                    </div>
                    
            </div>
        )
}


