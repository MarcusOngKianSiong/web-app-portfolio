import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListItem(prop){
    
    return (
        <div className="d-flex justify-content-around border-bottom border-dark m-4" style={{width: '50%'}}>
            <p>{prop.projectName}</p>        
            <p id={prop.project_id}>Documentation</p>
        </div>
    )
}