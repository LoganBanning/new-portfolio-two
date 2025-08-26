import { useState } from 'react';
import TopNav from "./Components/TopNav/TopNav";
import './App.css';
import About from "./Components/About/About";
import Projects from './Components/Projects/Projects';

function App() {

  return (
    <>
      <TopNav />
      <About />
      <Projects />
    </>
  )
}

export default App;
