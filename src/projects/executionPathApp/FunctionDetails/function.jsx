import 'bootstrap/dist/css/bootstrap.min.css';
export default function Function(prop){
    return(
        <div id={prop.functionName} className='d-flex flex-column justify-content-start align-items-start m-1'>
            <h5 className='m-2'>{prop.functionName}</h5>
            <div className="border border-primary w-100"></div>
            <p className='' style={{paddingLeft: '2%', paddingTop: '2%'}}><b>Filename: </b>{prop.file}</p>
            <p className='' style={{paddingLeft: '2%'}}><b>Class: </b>{prop.class}</p>
            <div className='d-flex p-2 border border-danger w-100'>
                <div className='border border-danger flex-fill'>
                    <p><b>Input</b></p>
                </div>
                <div className='border border-danger flex-fill'>
                    <p><b>Output</b></p>
                </div>
            </div>
        </div>
    )
}