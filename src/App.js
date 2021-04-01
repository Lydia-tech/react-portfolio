import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage'

function App() {
  return (

<BrowserRouter>
<Switch>
  <Route exact path="/react-portfolio" component={Homepage}/>
  <Route exact path="/" component={Homepage}/>
  
</Switch>
</BrowserRouter>

    // <div className=' w-screen md:text-3xl xl:text-5xl hover:opacity-90 focus:outline-none  gap-4 py-12 min-w-full mx-auto grid grid-cols-4 text-2xl font-sans'>
    //   <div className=' '></div>
    //   <Nav></Nav>
    //   <main>
    //     <About></About>
    //   </main>
    // </div>
  );
}

export default App;