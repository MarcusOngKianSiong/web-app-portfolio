import 'bootstrap/dist/css/bootstrap.min.css';

export default function Image(prop){
    
    return(
        <div className='m-2 d-flex justify-content-center'>
            <img src={prop.link} className='w-75'></img>
        </div>
    )
}