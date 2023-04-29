import 'bootstrap/dist/css/bootstrap.min.css';
import { baseUrl } from '../tools/globalSettings/globalSettings';

export default function ListItem(prop){

    return (
        <div className="d-flex justify-content-around border-bottom border-dark m-4" style={{width: '50%'}}>
            <p>{prop.projectName}</p>        
            {/* <a id={prop.project_id} href={`${baseUrl}/documentation?projectID=${prop.project_id}&title=${prop.projectName}`}>Documentation</a> */}
            <a id={prop.project_id} href={`https://marcusongkiansiong.github.io/web-app-portfolio/documentation?projectID=${prop.project_id}&title=${prop.projectName}`}>Documentation</a>
        </div>
    )
}

