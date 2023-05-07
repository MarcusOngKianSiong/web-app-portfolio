import 'bootstrap/dist/css/bootstrap.min.css';

export default function Chat_Bubble(prop){
    console.log("CREATING A CHAT BUBBLE.....")
    return(
        <div className='bg-success rounded m-2 p-2 text-white'>
            {prop.message}
        </div>
        
    )
}

