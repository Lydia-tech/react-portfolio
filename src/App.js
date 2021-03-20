import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import logo from "./logo.svg";
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import BudgetTracker from './pages/Budget-Tracker';
import HikeNow from './pages/Hike-Now';
import SLPGoalden from './pages/SLP-Goalden';
import WorkDayScheduler from './pages/Work-Day-Scheduler';
//import coverImage from "../../assets/cover/cover-image.jpg";

function App() {
  return (

<BrowserRouter>
<Switch>
  <Route exact path="/budget-tracker" component={BudgetTracker}/>
  <Route exact path="/hike-now" component={HikeNow}/>
  <Route exact path="/SLPGoalden">
    <SLPGoalden />
  </Route>
  <Route exact path="/work-day-scheduler" component={WorkDayScheduler}/>
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
