import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { useLocation, useNavigate } from 'react-router-dom';
import { getDocumentation } from '../back-end-functions/retrieveData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './markdown.css'

export default function MarkdownDocumentation(prop){
    
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const something = new URLSearchParams(location.search);
    const query = Object.fromEntries(something.entries());
    console.log("ENDING: ",query);
    
    const [doc,setDocument] = useState(null);
    
    const backToProjectListPage = () => {
        navigate({
            pathname: '/',
        })
    }

    const renderers = {
        image: (src,alt)=>{
            console.log("Hello")
            const a = <div id="pictures"><img src={src} alt={alt}/> </div>
            return a
        }
    }
    
    useEffect(()=>{
            getDocumentation(query.projectID).then(res=>{
                const elements = <ReactMarkdown>{res.documentation}</ReactMarkdown>
                console.log("This: ",res.documentation);
                setDocument(elements);
            })
    },[query.projectID])
    
    return(
        <div className='d-flex flex-column w-100 p-4  justify-content-center align-items-center' style={{}}>
            <div onClick={()=>{backToProjectListPage()}}>Back to home page</div>
            <div className='w-75 '>
                {doc}
            </div>
        </div>
        
    )
}