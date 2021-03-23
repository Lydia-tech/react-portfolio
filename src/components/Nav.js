import React from 'react';
import {Link} from 'react-router-dom';
// import ReactDOM from 'react-dom';

function categorySelected(name) {
    console.log(`${name} clicked`)
}
function Nav() {
    const  categories = [
        { name: 'Budget Tracker', description: 'Keep track of your budget while on the go!' },
        { name: 'Hike Now', description: 'Find a trail and the weather when you are out of town!' },
        { name: 'SLP Goalden', description: 'Track your students progress with this application.' },
        { name: 'Work Day Scheduler', description: 'Keep track of your tasks with this easy to use application.' },
    ];
    return (
      <header>
        <h2>
          <a href="/">
            <span role="img" aria-label="cactus">
            🌵  
            </span>
            Hello World!
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about">About Me</a>
            </li>
            <li>
              <span>Contact</span>
            </li>

            <Link to="/budget-tracker">Budget Tracker</Link>
            <Link to="/hike-now">Hike Now</Link>
            <Link to="/SLPGoalden">SLP Goalden</Link>
            <Link to="/work-day-scheduler">Work Day Scheduler</Link>
            {/* {categories.map((category) => (
              <li className="mx-1" key={category.name}>


                <span onClick={() => categorySelected(category.name)} >
                    {category.name}
                  </span>
              </li>
            ))} */}
          </ul>
        </nav>
      </header>
    );
  }
  
export default Nav;
  