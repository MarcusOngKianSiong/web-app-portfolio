import 'bootstrap/dist/css/bootstrap.min.css';
import {getTableData} from '../back-end-functions/retrieveData.js'
import ListItem from './listItem'
import { useEffect,useState } from 'react';




export default function ProjectList(prop){
    
    const [projects,setProjects] = useState(null)

    const createComponents = () => {
        const elements = []
        getTableData('projects').then(res=>{
            res.forEach(item=>{
                elements.push(<ListItem projectName={item.name}/>)
            })    
        })
        setProjects(elements)
    }

    useEffect(()=>{
        createComponents()
    },[])

    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className='m-5'>Projects</h2>
            {projects}
        </div>
    )
}