import 'bootstrap/dist/css/bootstrap.min.css';
export default function Test(prop){
    
    const oneForEach = () => {
        const elements = []
        prop.data.forEach(element=>{
            const display = []
            const e = <div className='border border-danger'>{display}</div>
            for(const key in element){
                display.push(<p><b>{key}: </b>{element[key]}</p>)
            }
            elements.push(e)
        })
        return elements
    }
    
    return(
        <div>
            {oneForEach()}
        </div>
    )
}