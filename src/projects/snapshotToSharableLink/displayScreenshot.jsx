import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisplayScreenShot(prop){
    
    function display(){
        if(prop.image){
            const url = URL.createObjectURL(prop.image)
            return <img className="h-100 w-50" src={url}></img>
        }else{
            return <p>paste screenshot here</p>
        }
    }
    
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}} onPaste={(e)=>{prop.handlePaste(e)}} contentEditable={false}>
            {display()}
        </div>
    )
}