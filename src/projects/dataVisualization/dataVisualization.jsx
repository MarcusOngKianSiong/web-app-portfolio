// External
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { io } from 'socket.io-client';
import Button from 'react-bootstrap/Button';
import { source } from '../../back-end-functions/universalSettings.js';
import 'bootstrap/dist/css/bootstrap.min.css';


// Personal
import {findMaxAndMin,extractArrayFromNestedArraysAndObjects,concatenateArraysWithinArrayOfObjects} from '../../tools/arrayManipulation/arrayManipulation.js'
import LineChart from './charts/lineChart.jsx';
import NoData from './charts/noData.jsx';
import { socket } from '../../tools/socket/socket.js';

export default function DataVisualization(){

    const navigate = useNavigate()

    const backToHomePage = () => {
        navigate('/*')
    }

    function changeChartOptions(obj){
        console.log("WHY AM I NOT RECEIVING THE CORRECT DATA?", obj);
        const arrayOfYAxis = extractArrayFromNestedArraysAndObjects(obj,"datasets");
        console.log("CHECKING extraction of Y: ",arrayOfYAxis);
        const combinedArraysOfYAxis = concatenateArraysWithinArrayOfObjects(arrayOfYAxis);
        console.log("CHECKING combining arrays: ",combinedArraysOfYAxis);
        const maxAndMin = findMaxAndMin(combinedArraysOfYAxis);
        console.log("CHECK max and min: ",maxAndMin);
        return maxAndMin;
    }
    const [data,setData] = useState( {
        labels: [],
        datasets: [],
    })
    const [chartOptions,setChartOptions] = useState({
        responsive: true,
        plugins: {
          // legend: {
          //   position: 'top' as const,
          // },
          title: {
            display: true,
            text: 'Pepsi vs coca cola chart',
          },
        },
        scales: {
          y: {
            min: -2.5,
            max: 2.5
          }
        },
        elements: {
          point: {
            radius: 0
          }
        }
    })
    const [chart,setChart] = useState(<NoData/>)
    

    useEffect(()=>{
        
        const socket = io(source);
        socket.on("visualize data",(data)=>{
          // Change Y axis range to fit the data nicely in the chart
          const minAndMax = changeChartOptions(data)
          const newChartOptions = {...chartOptions}
          newChartOptions.scales.y = {min: minAndMax.min, max: minAndMax.max}
          console.log("CHECK: ",newChartOptions)
          setChartOptions(newChartOptions)
          setData(data)
          setChart(<LineChart data={data} chartOptions={chartOptions} />)
        })
        
    },[])

    return(
        <div>
            <p onClick={()=>{backToHomePage()}}>Back to projects</p>
            <Button variant="outline-info" className='w-25 m-3'>Line Chart</Button>
            {chart}
        </div>
    )
    
}