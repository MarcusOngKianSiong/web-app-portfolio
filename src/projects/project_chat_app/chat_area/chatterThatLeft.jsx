import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChatterThatLeft(prop){
    return(
        <div className='m-2 text-muted'>
            {prop.name} has left the room.
        </div>
    )
}