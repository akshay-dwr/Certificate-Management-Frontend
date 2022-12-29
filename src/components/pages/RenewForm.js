import classes from './RenewForm.module.css'
import {useRef} from 'react'
import React from 'react';
import { Redirect } from 'react-router-dom';


 export function RenewForm()
{   
    const aliasInputRef=useRef();
    const renewYearInputRef=useRef();
    
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        console.log("login first")
        return <Redirect to="/login" />;
      }
    
    function submitHandler(event)
    {
        event.preventDefault();
        const baseURL='http://localhost:2000/renew';
        const enteredAlias=aliasInputRef.current.value;
        const enteredRenewYear=renewYearInputRef.current.value;

        const certiData={
            alias:enteredAlias,
            renewYear:enteredRenewYear
        };
       
        fetch(baseURL,
            {
                
                method:"PUT",
                headers:{
                    "authorization": `Bearer ${user.accessToken}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(certiData)
            }).then((response) =>response.text()).then(str=>{
                alert(str);
              }).catch((error) =>
            {
                alert("Error!")
            })
            aliasInputRef.current.value=""
            renewYearInputRef.current.value=""
      }
      
      
        return(
            <div>
                <h2><center>Renew your Certificate</center></h2>
            
            <div className={classes.item}>            
                <form className={classes.form} onSubmit={submitHandler}>
                    
                    <div className={classes.control}>
                        <label htmlFor="title">Alias Name</label>
                        <input type="text" data-testid={"alias-element"} required id="alias" ref={aliasInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="image">Renew Years</label>
                        <input type="text" data-testid={"year-element"} required id="renewYear" ref={renewYearInputRef}/>
                    </div>
                    <div className={classes.actions}>
                    <button data-testid={"button-element"}>Renew Certificate</button>
                    
                </div>
                </form>
            </div>
            </div>
            
            
        )
      
        
        }
