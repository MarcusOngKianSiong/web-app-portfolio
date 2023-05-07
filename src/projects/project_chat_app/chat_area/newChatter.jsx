import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewChatter(prop){
    return(
        <div className='m-2 text-muted'>
            {prop.name} has entered the room.
        </div>
    )
}