import logo from './logo.svg';
import './App.css';
import firebase from './firebase'
import React, { useEffect, useState } from 'react';
import Slateshot from './slateshot/Slateshot';
function App() {
  // useEffect(()=>{
  //   firebase.database().ref('/').on('value', snapshot => {
  //     if (snapshot.val() != null)
  //         for (const key in snapshot.val()) {
  //             setUser(snapshot.val()[key])
  //         }   
  // })
  // },[])
  
  return (
   
    <div className="Slateshot__main">

      <Slateshot username='afnan nadeem' 
       height="180" 
       width="160" 
       srcImg='uploads/mubeen123/picture.jpg'
       viewType='edit'
       srcVideo='uploads/mubeen123/video.mp4' />
       
   
    </div>
  );
}

export default App;
