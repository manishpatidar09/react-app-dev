import './App.css';
import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import A from './components/A';
import B from './components/B';


function App() {

  //const x = "hello";
  const [x, setX] = useState(['RFC','RCC'])
  return (
    <div className="App">
        <Router>
        <nav>
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
        </nav>
           <Routes>
             <Route path="/a" element={<A />} />
             <Route path="/b" element={<B />} />
           </Routes>
       </Router>

    </div>
    
  );
}

export default App;
