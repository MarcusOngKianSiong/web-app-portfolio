import Section from './section'
import {getDocumentation} from '../back-end-functions/retrieveData.js'
import { useEffect, useState } from 'react'

export default function Documentation(prop){

    const query = {projectID: 1,title: 'Portfolio website'} // Get the project id from react router dom. 

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
        const DocumentationData = getDocumentation(query.projectID);
        
        createSections(DocumentationData);
    },[])

    return(
        <div>
            <h2>Documentation: {query.title}</h2>
            <p>Back to project list</p>
            
            {sections}
        </div>
    )
}