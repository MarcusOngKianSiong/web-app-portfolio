import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function DisplayConnectionID(prop){

    return(
        <div className='d-flex flex-column align-items-center'>
            <h3>Use this instance ID:</h3>
            <h4>{prop.instanceID}</h4>
            <Button onClick={()=>{prop.startVisualisation(prop.data)}}>Next</Button>
        </div>
    )

}


