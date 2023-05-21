import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Groups from './groups'

export default function SideBar(prop){
    console.log("Sidebar: ",prop)
    // Go through the whole array of objects and determine what are the various groups there are. 
    const createGroups = () => {
        const groups = {};
        const length = prop.data.length;
        for(let i = 0; i < length; i++){

            const dataPiece = prop.data[i].data
            console.log(dataPiece)
            const groupName = dataPiece.group
            if(groupName in groups){
                groups[groupName].push(prop.data[i])
            }else{
                groups[groupName] = [prop.data[i]]
            }
        }
        console.log("sidebar groups: ",groups)
        const elements = []
        for(const groupName in groups){
            elements.push(<Groups changeDisplayState={prop.changeDisplayState} data={groups[groupName]} groupName={groupName}/>)
        }
        return elements
    }
    
    useEffect(()=>{
        console.log("SIDEBAR CHECK: ",prop.data)
    },[prop])
    
    return(
        <div className='' style={{overflowY: 'auto',height: '100vh'}}>
            {createGroups()}
        </div>
    )
}

