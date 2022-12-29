/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Redirect } from 'react-router-dom';
import welcome from './welcome5.png';
export function Welcome(){
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        console.log("login first")
        return <Redirect to="/login" />;
      }
    
    return(
        <div>
            <marquee direction="right" className='font'><b><big><big>Welcome to Certificate Management system!!</big></big></b></marquee>
            <img src={welcome} className="img-fluid" alt="Responsive image"></img>
        </div>
        

    )
}