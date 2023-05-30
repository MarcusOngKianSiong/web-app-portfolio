import 'bootstrap/dist/css/bootstrap.min.css';
import {getTableData} from '../back-end-functions/retrieveData.js'
import ListItem from './listItem'
import { useEffect,useState } from 'react';

export default function ProjectList(prop){
    
    const [projects,setProjects] = useState(null)
    
    const createComponents = () => {
        console.log("PROJECT LIST: CREATING COMPONENTS")
        const elements = []
        getTableData('projects').then(res=>{
            console.log("LEVEL 1")
            getTableData('web_application_directory').then(directories=>{
                console.log("CHECKING DIRECTORIES: ",directories)
                res.forEach(item=>{
                    console.log(item);
                    const relatedProject = directories.find(director=>director.project_id === item.id)
                    elements.push(<ListItem projectName={item.name} project_id={item.id} route={relatedProject} />)
                })
                setProjects(elements)
            })
            
        }).catch(err=>{
            console.log("ERROR: ",err)
        })
        
    }

    useEffect(()=>{
        // getTableData('projects').then(res=>{
        //     console.log(res)
        // })
        
        createComponents()
    },[])

    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className='m-5'>Projects</h2>
            {projects}
        </div>
    )
}