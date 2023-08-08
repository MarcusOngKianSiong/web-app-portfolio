import {RingLoader} from 'react-spinners'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadingScreen(prop){
    const [currentStep,setCurrentStep] = useState('checking access token...')
    useEffect(()=>{
        const authorizationToken = checkToken()                 // Check if there is the get authorization code step by checking if current URL's query have an authorization token (In the process of getting access token using authorization token)
        if(authorizationToken === null){                        // If there is no authorization code query in current URL
            fetch('http://localhost:3001/documentation/checkAccessToken').then(res=>{  // Check if access token held by the server works or not 
                return res.json()
            }).then(res=>{
                if(res.status === 'success'){                           // if it works (Access token exists)
                    setCurrentStep("Authorization and authentication complete. \nMoving to app....");               // Access token works, so go to the screenshot page
                    prop.changePage()
                }
                if(res.query !== undefined){                                            // If it does not work (access token does not exist. Returns a query string to obtain authorization token)
                    const link = 'https://www.dropbox.com/oauth2/authorize?' + res.query                // refresh and access token does not work, so authorize access again by pressing the allow button
                    window.location.href = link;
                }
            })
        }else{                                                  // If there is an authorization code query (first time app initialization)
            fetch(`http://localhost:3001/documentation/generatingAccessToken?authorizationToken=${authorizationToken}`).then(res=>{
                return res.json();
            }).then(res=>{
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

const checkToken = () => {
    const currentURL = window.location.href
    const url = new URL(currentURL)
    const urlParams = new URLSearchParams(url.search)
    const authCode = urlParams.get('code')
    return authCode
}
