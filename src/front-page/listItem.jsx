import 'bootstrap/dist/css/bootstrap.min.css';
import { baseUrl } from '../tools/globalSettings/globalSettings';
import { useNavigate } from 'react-router-dom';


export default function ListItem(prop){

    const navigate = useNavigate()
    
    const goToDocumentationPage = () => {
        navigate({
            pathname: '/*/documentation',
            search: `?projectID=${prop.project_id}&title=${prop.projectName}`
        })
    }
    
    const goToProject = () => {
        try {
            navigate(prop.route.route);
        } catch (error) {
            console.log("There is an error with route...",error.message)   
        }
            
    }

    return (
        <div className="d-flex justify-content-around border-bottom border-dark m-4" style={{width: '50%'}}>
            <p onClick={()=>{goToProject()}}>{prop.projectName}</p>        
            {/* <a id={prop.project_id} href={`${baseUrl}/documentation?projectID=${prop.project_id}&title=${prop.projectName}`}>Documentation</a> */}
            <div onClick={()=>{goToDocumentationPage()}}>Documentation</div>
        </div>
    )
}

