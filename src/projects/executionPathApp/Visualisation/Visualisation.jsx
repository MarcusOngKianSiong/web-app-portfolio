import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


import SideBar from './sideBar/sideBar'
import DetailsPanel from './detailsPanel/detailsPanel'
import { useEffect, useState } from 'react';

function Visualisation(prop) {

    const setDisplayStateContainer = () =>{
        const stateContainers = [];
        const length = prop.data.length;
        for(let i = 0; i < length;i++){
            const stateContainer = {
                state: true,
                id: i,
                data: prop.data[i]
            }
            stateContainers.push(stateContainer);
            console.log("CHECKING: ",stateContainers)
        }
        console.log("ENDING: ",stateContainers)
        return stateContainers
    }

    console.log("visualisation: ",prop.data)
    const [selectedSteps,setSelectedSteps] = useState(setDisplayStateContainer());
    
    // Allow for checkbox to control what gets shown in the details panel
    const changeDisplayState = (id) => {
        const newCopy = selectedSteps.map((item) => {
            if (item.id === id) {
              return { ...item, state: !item.state };
            }
            return item;
          });
        
          setSelectedSteps(newCopy);
    }

  
  useEffect(()=>{
    console.log("CHECKING STATE: ",selectedSteps)
  },[selectedSteps])

  useEffect(()=>{
        console.log("DATA HAS CHANGED!!!",prop.data)
        setSelectedSteps(setDisplayStateContainer())
  },[prop])

  return (
    <div className="App w-50 h-100 d-flex" style={{height: '100vh'}}>
      <div className="border border-success w-100 h-100 p-2 d-flex flex-wrap overflow-auto" style={{maxWidth: '1000px', maxHeight: '1000px'}}>
        
          {/* {produceSet()} */}
          {/* <Arrow direction={'up'}/> */}
          <SideBar data={selectedSteps} changeDisplayState={changeDisplayState}/>
          <DetailsPanel data={selectedSteps}/> 
          
      </div>
      
    </div>
  );
}

export default Visualisation;
