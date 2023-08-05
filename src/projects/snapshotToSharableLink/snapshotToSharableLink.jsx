import { useEffect, useState, useRef } from "react"
import { useNavigate } from 'react-router-dom';
import DisplayScreenShot from "./displayScreenshot";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { savesnapshotandgetsharablelink } from "../../back-end-functions/retrieveData.js";

// import url from 'url'
// import queryString from 'querystring'
import LoadingScreen from './loadingScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import PasteAndDisplayScreenshot from './pasteAndDisplayScreenShot/pasteAndDisplayScreenshot'

export default function SnapshotToSharableLink(){
    const navigate = useNavigate()
    const backToHomePage = () => {
        navigate('/')
    }
        
    const [displaySharableLink,setSharableLink] = useState(null)
    
    const showSharableLink = (link) => {
        setSharableLink(
            <div className='border border-dark rounded m-5 p-3' style={{borderRadius: '10px'}}>
                <h5 className='m-1'>Sharable link</h5>
                <p>
                    {link}
                </p>
            </div>
            
        )
    }

    const changePage = () => {
        console.log("Moving to App....")
        setPage(<PasteAndDisplayScreenshot showSharableLink={showSharableLink}/>)
    }

    const [page,setPage] = useState(<LoadingScreen changePage={changePage}/>)
    
        return(
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <p onClick={()=>{backToHomePage()}}>Return to project list</p>
                <h3 className='m-5'>Markdown documentation: Save and get sharable link</h3>           
                    {/* <button onClick={()=>{getAuthorizeCode()}}>Hello</button>
                    <button onClick={()=>{getRefreshToken(accessToken)}}>Get refresh token</button> */}
                    {page}
                    
                    {/* <PasteAndDisplayScreenshot/> */}
                    {displaySharableLink}
            </div>
        )
}


