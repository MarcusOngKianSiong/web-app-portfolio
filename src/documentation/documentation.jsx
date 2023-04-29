import Section from './section'
import {getDocumentation} from '../back-end-functions/retrieveData.js'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { baseUrl } from '../tools/globalSettings/globalSettings';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Documentation(prop){
    const location = useLocation()
    console.log(location)
    const something = new URLSearchParams(location.search)
    const query = Object.fromEntries(something.entries());
    console.log("ENDING: ",query)
    // const query = {projectID: 1,title: 'Portfolio website'} // Get the project id from react router dom. 
    
    // const [documentationData,setDocumentationData] = useState(null)
    const [sections, setSections] = useState([])

    const createSections = (data) => {
        const sections = []
        data.forEach(section=>{
            const sectionElement = <Section data={section}/>
            sections.push(sectionElement)
        })
        setSections(sections)
    }

    useEffect(()=>{
        
        if(query){
            console.log("ARRIVING??")
            getDocumentation(query.projectID).then(res=>{
                console.log("RECEIVING DATA? ",res)
                createSections(res);
            });
            
        }
        
    },[])
    
    return(
        <div className=' m-2 d-flex flex-column align-items-center'>
            <h2 className='m-5'>Documentation: {query.title}</h2>
            <a href={`${baseUrl}/`} className='m-1'>Back to projects list</a>
            {sections}
        </div>
    )
}