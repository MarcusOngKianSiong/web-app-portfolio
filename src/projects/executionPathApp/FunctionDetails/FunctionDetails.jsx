import Function from "./function"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FunctionDetails(prop){
    console.log("Function details: ",prop.data)
    // const createList = () => {
    //     const listing = [];
        
    //     prop.data.forEach(funcExecution => {
    //         listing.push(<Function funcExecution={funcExecution}/>)
    //     })
    //     return(
    //         <dov></dov>
    //     )
    // }
    
    /**
     * The function "something" returns the value 10.
     * @returns the number 10.
     */
    /**
     * The function "something" returns the value 10.
     * @returns the number 10.
     */
    function something(){
        return 10
    }

    return(
        <div className="border border-dark w-50" style={{minHeight: '850px'}}>
            <div className="overflow-auto" style={{maxHeight: '1000px', minHeight: '1000px'}}>
                <Function functionName={'something'}/>
                <Function functionName={'something'}/>
                <Function functionName={'something'}/>
                <Function functionName={'something'}/>
                <Function functionName={'something'}/>
                <Function functionName={'something'}/>
                <Function functionName={'something'}/>
                
                
            </div>
        </div>
    )
}