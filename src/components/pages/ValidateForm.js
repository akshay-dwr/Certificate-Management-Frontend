import './ValidateForm.css'
import React,{useRef} from 'react';
import { Redirect } from 'react-router-dom';



export function ValidationForm()
{
    const aliasnameInputRef=useRef();
    //const [getResult,setGetResult]=useState(null);
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        console.log("login first")
        return <Redirect to="/login" />;
      }
    
     
    function submitHandler(event)
    {
          event.preventDefault();
          const baseURL='http://localhost:2000';
          const enteredAliasname=aliasnameInputRef.current.value;
          fetch(baseURL+"/validate/"+enteredAliasname,
          {
            method:"GET",
            headers:{
                "authorization": `Bearer ${user.accessToken}`,
                "Content-Type":"application/json"},
        }).then((response) =>response.text()).then(str=>{
            console.log(str);
            alert(str);
                        
          }).catch(e=>{
            console.log(e);
            alert(e);
          })
              aliasnameInputRef.current.value=""
        }

     function refreshPage(){
      window.location.reload(true);
     }
    

    return(
        <div>
            
            <h2><center>Validate your Certificate</center></h2>
        
        <div className='item'>
        <form className='form'onSubmit={submitHandler}>
            <div className='control'>
            <label>AliasName:</label>
            <input type="text" required placeholder="enter your alias name" id="aliasname" ref={aliasnameInputRef}/>
            </div>
            <div className='actions'>
            <button>Validate</button>
            </div>
            <div className='actions'>
            <button onClick={refreshPage}>Refresh</button>
            </div>
        </form>
        </div>
        
        </div>
    )
}








