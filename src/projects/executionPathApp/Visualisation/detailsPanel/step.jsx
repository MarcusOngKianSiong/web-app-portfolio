import 'bootstrap/dist/css/bootstrap.min.css';

export default function Step(prop){
    return(
        <div className=' d-flex flex-column justify-content-end m-3'>
            
            <div className=' d-flex'>
                <h5 className=' text-right'>{prop.data.name}</h5>
            </div>
                
            
            <div className="border border-dark w-100"></div>
            <div className=' d-flex'>
                <div><b>group:</b> {prop.data.group}</div>
            </div>
            <div className=' d-flex'>
                <div><b>Input:</b> {prop.data.input}</div>
                
            </div>
            <div className=' d-flex'>
                <div><b>Output:</b> {prop.data.output}</div>
                
            </div>
            <div className=' d-flex'>
                <div><b>Others:</b> {prop.data.others}</div>
                
            </div>
            {/* <p>App name: {prop.data.appName}</p> */}
            
                
                
        </div>
    )
}