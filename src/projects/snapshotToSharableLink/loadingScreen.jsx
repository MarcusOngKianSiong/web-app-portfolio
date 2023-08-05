import {RingLoader} from 'react-spinners'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadingScreen(prop){

    const [currentStep,setCurrentStep] = useState('checking access token...')
    // const navigate = useNavigate()
    
    
    useEffect(()=>{
        const authorizationToken = checkToken()                 // Check if there is the get authorization code step by checking if current URL's query have an authorization token (In the process of getting access token using authorization token)
        if(authorizationToken === null){                        // If there is no authorization code query in current URL
            console.log("Current URL has no query")            
            // Check if access token held by the server works or not 
            fetch('http://localhost:3001/documentation/checkAccessToken').then(res=>{
                return res.json()
            }).then(res=>{
                console.log("It works")
                // if it works
                if(res.status === 'success'){
                    console.log("Access token exist");
                    // Access token works, so go to the screenshot page
                    setCurrentStep("Authorization and authentication complete. \nMoving to app....");
                    prop.changePage()
                }
                // If it does not work (Returns a query string to obtain authorization token)
                if(res.query !== undefined){
                    console.log("Access token does not exist: ",res.query);
                    // refresh and access token does not work, so authorize access again by pressing the allow button
                    const link = 'https://www.dropbox.com/oauth2/authorize?' + res.query
                    window.location.href = link;
                }
            })
        }else{                                                  // If there is an authorization code query (first time app initialization)
            console.log("Current URL has authorization code query: ",authorizationToken)
            fetch(`http://localhost:3001/documentation/generatingAccessToken?authorizationToken=${authorizationToken}`).then(res=>{
                return res.json();
            }).then(res=>{
                console.log("Checking: ",res)
                if(res === true){   
                    setCurrentStep('Authentication successful. Access token received. \nMoving to app....')
                    prop.changePage()
                }else{
                    // If the authorization code result in no access token, backend will send back a query
                    const link = 'https://www.dropbox.com/oauth2/authorize?' + res.query
                    window.location.href = link;
                }
            })
        }
    },[])
    return (
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <h3>{currentStep}</h3>
            <RingLoader color={'#36d7b7'} css={{color: 'black'}} size={100}/>
        </div>
    )
}

const getAuthorizationToken = (query) => {
    
}

const checkToken = () => {
    const currentURL = window.location.href
    const url = new URL(currentURL)
    const urlParams = new URLSearchParams(url.search)
    const authCode = urlParams.get('code')
    return authCode
    // if(authCode !== null){
    //     getAccessCode(authCode)
    // }
}

const checkAccessToken = async (setCurrentStep) => {
    console.log("Check access token")
    
}

const generateAccessToken = async (authCode,setCurrentStep) => {
    
    return 

}

const moveToApp = () => {
    console.log("MOVING...TO APP")
}