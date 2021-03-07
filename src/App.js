import React from 'react';
// import logo from "./logo.svg";
import Nav from './components/Nav';
import About from './components/About';
//import coverImage from "../../assets/cover/cover-image.jpg";

function App() {
  return (
    <div className=' w-screen md:text-3xl xl:text-5xl hover:opacity-90 focus:outline-none  gap-4 py-12 min-w-full mx-auto grid grid-cols-4 text-2xl font-sans'>
      <div className=' '></div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
