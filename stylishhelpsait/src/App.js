import {BrowserRouter as  Router, Route , Routes} from 'react-router-dom';
import {HandySvg} from 'handy-svg';
import React from 'react';
import './App.css';
import './Header.css';
import Main from './Main';
import Header from './Header';
import Blog from './Blog';
import IsFree from './IsFree';
import Seminars from './Seminars';
import Trainings from './Trainings';
import Services from './Services';
import Reviews from './Reviews';
import Contacts from './Contacts';




function App() {

  return (
    <div className="App">
    <Header/>

    <Router>
      <Routes>
        <Route  path='/' element={<Main/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/isfree' element={<IsFree/>} />
        <Route path='/seminars' element={<Seminars/>} />
        <Route path='/trainings' element={<Trainings/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </Router>

<main>
  
</main>


    </div>
  );
 

}

export default App;
