import { useState } from 'react';
import './App.css'
import UserProfile from "./components/UserProfile";
import List from "./components/MoviesList";

function App() {
  
  return (
    <div style={{marginLeft: "auto", marginRight: "auto"}} >
      <UserProfile style={{marginLeft: "auto", marginRight: "auto"}} />
      <br/>
      <List />
    </div>
  )
}

export default App
