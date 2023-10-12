import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default function App() {
  let pageSize=5
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key='general' pageSize={pageSize} category='general'/>}></Route>
            <Route exact path="/business" element={<News key='business' pageSize={pageSize} category='business'/>}></Route>
            <Route exact path="/entertainment" element={<News key='entertainment' pageSize={pageSize} category='entertainment'/>}></Route>
            <Route exact path="/health" element={<News key='health' pageSize={5} category='health'/>}></Route>
            <Route exact path="/science" element={<News key='science' pageSize={5} category='science'/>}></Route>
            <Route exact path="/sports" element={<News key='sports' pageSize={5} category='sports'/>}></Route>
            <Route exact path="/technology" element={<News key='technology' pageSize={5} category='technology'/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}