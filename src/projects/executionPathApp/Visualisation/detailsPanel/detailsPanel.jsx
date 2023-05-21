import 'bootstrap/dist/css/bootstrap.min.css';
import Step from './step'

export default function DetailsPanel(prop){
        const displaySteps = () => {
            console.log("DETAILS PANEL: ",prop.data)
            const steps = [];
            const length = prop.data.length
            for(let i = 0; i<length; i++){
                if(prop.data[i].state){
                    steps.push(<Step data={prop.data[i].data}/>);
                }
            }
            return steps;
        }
        return(
                <div className=' m-1' style={{overflowY: 'auto', height: '100vh', width: '80%'}}>
                    {displaySteps()}
                </div>
        )
}

