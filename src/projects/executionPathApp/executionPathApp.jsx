import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// import {homePage} from '../../tools/globalSettings.js'
import { baseUrl } from '../../tools/globalSettings/globalSettings.js';
import {source} from '../../back-end-functions/universalSettings.js'
import Visualisation from './Visualisation/Visualisation'
import FunctionDetails from './FunctionDetails/FunctionDetails'
import DisplayConnectionID from './displayConnectionID/displayConnectionID'
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client'

import Test from './test'

export default function ExecutionPathApp(){

    const navigate = useNavigate()
    const [display,setDisplay] = useState(null)
    const [data,setData] = useState([])

    // const getData = () => {
        /* Expected data format
            const data = [{
                functionName: '',
                class: '',
                file: '',
                input: '',
                output: '',
            }]
        */
    // }

    const backToHomePage = () => {
        navigate('/')
    }
    
    // Open up the visualisation once you press the next button
    const startVisualisation = (data) => {
        // setDisplay([<Visualisation data={data}/>,<FunctionDetails data={data}/>])
        console.log("Changing to visualisation, CHECKING DATA BEING PASSED: ",data)
        setDisplay(<Visualisation data={data} />)
    }
    
    useEffect(()=>{
        
        const socket = io(source)
        
        socket.emit('create execution path app instance',"something")
        socket.on('create execution path app instance',(id)=>{
            console.log("Checking ID: ",id)
            setDisplay(<DisplayConnectionID instanceID={id} startVisualisation={startVisualisation} data={data}/>)
        })
        
        socket.on('send steps to the app',(data)=>{
            console.log("data received: ",data)
            setData(data)
        })
        
    },[])
    
    useEffect(()=>{
            startVisualisation(data)
    },[data])

    return (
        <div className='border border-primary d-flex flex-column align-items-center w-100' style={{height: '100vh'}}>
            <p onClick={()=>{backToHomePage()}}>Back to projects</p>
            {/* 
            
            <div className='d-flex ' style={{minHeight: '100px'}}>    
                {display}
                <Visualisation /> 
                <FunctionDetails/>
            </div> 
            */}
            {display}
        </div>
    )
}




function getSessionID(io){
    io.emit()
}