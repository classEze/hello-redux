import React from 'react';


export const setTechnology=(text)=>{
  return {
     type: "SET_TECHNOLOGY",
     payload:{
       tech:text,
       next:null
     }
   }
}