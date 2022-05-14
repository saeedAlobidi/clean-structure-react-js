import React, { Component ,useState,useRef,useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default ()=>{

    const [state,setState]=useState(()=>{return 1}) //just fro fine 
    const count = useRef(0);
    //just fro fine 
    useEffect(() => {
        
        count.current=count.current+1;
        setState((count) => count +1);
        
      },[]);
    
    let navigate = useNavigate();
return ( <butoon  className="btn btn-primary mt-5" onClick={ ()=>{navigate(`/`)}}>Back-{state}-{count.current}</butoon>);
    
}


