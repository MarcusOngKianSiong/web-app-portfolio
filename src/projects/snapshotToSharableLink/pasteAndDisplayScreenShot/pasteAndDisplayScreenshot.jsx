import React, { useRef,useEffect,useState } from 'react';
import DisplayScreenShot from './displayScreenshot.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const findImageAsFile = (clipboardItems)=>{
    
    const returnData = {
        imageFile: null,
        fileFormat: null
    }

    for (let i = 0; i < clipboardItems.length; i++) {               // Loop through the clipboard items
        const item = clipboardItems[i];
        
        if (item.type.indexOf('image') !== -1) {                    // Find the image within the array of clipboard items
            console.log("ITEM FOUND: ",item);
            
            const blob = item.getAsFile();                          // Turn the clipboard item (image) into a file
            
            const fileFormat = blob.type.split('/');                // Get the file type
            
            // Set the return object items (image file, file type)
            returnData.imageFile = blob;
            returnData.fileFormat = fileFormat[1];

            // return the object item
            return returnData;
        }
    }
    throw new Error("No image file found.")
    
}


export default function PasteAndDisplayScreenShot(prop){

    const canvasRef = useRef(null);
    const [fileDataAndFileExtension,setFileDataAndFileExtension] = useState(null)
    const [fileName, setFileName] = useState(null);
    const [errorMessage,setErrorMessage] = useState(null)

    const handlePaste = (e) => {
        console.log("Hello there");
        try {
            const imageFile = findImageAsFile(e.clipboardData.items)    // Get clipboard items using clipboard api
            console.log(imageFile)
            setFileDataAndFileExtension(imageFile)
        } catch (error) {
            if(error = "No image file found"){
                console.log("find image as file: No image found")
            }
        }
    }
    
    const storeScreenshot = () => {
        if(fileName !== null){
            const reader = new FileReader()
            reader.onload = (event) => {
                const buffer = event.target.result;
                console.log(buffer);
                fetch(`http://localhost:3001/documentation/uploadFile?name=${fileName}.${fileDataAndFileExtension.fileFormat}`,{
                    method: 'post',
                    headers: {
                        'Content-Type': `image/${fileDataAndFileExtension.fileFormat}`
                    },
                    body: buffer
                })
                .then(res=>{
                    return res.json();
                })
                .then(res=>{
                    try{
                        prop.showSharableLink(res.sharableLink)
                    }catch(error){
                        console.log("Error showing sharable link: ",res)
                    }
                    console.log(res);
                })
            }
            reader.readAsArrayBuffer(fileDataAndFileExtension.imageFile)            // This produces an array buffer, and not a buffer object.
            
        }else{
            setErrorMessage("file name cannot be empty")
        }
    }
    
    return (
        <div className='d-flex flex-column w-100 align-items-center'>
            
            <div onPaste={(e)=>{handlePaste(e)}} className="" style={{ height: '75%',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <DisplayScreenShot fileDataAndFileExtension={fileDataAndFileExtension}/>
            </div>
            <input
                    className='m-5 '
                    type="text"
                    onChange={(e) => {
                    setFileName(e.target.value);
                    }}
                    value={fileName}
            />
            <p style={{color: 'red'}}>{errorMessage}</p>
            <button className='btn btn-primary w-50' onClick={() => { storeScreenshot() }}>
                Save
            </button>
                    
        </div>
    )
    
}


