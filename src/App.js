
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './App.css';


import BookRoute from './BookRoute';
import Home from './Home';

import NotFound from './NotFound'

function App() {
  const location =useLocation();
  console.log(location);
  return (
    <>
    <Routes location="/books">
      <Route path='/books' element={<h1>Extra content</h1>}/>
    </Routes>
    <nav>
       <ul>
          <li><NavLink style={({isActive}) => { return isActive? {color: "red"}: {}}} to="/" >Home</NavLink> </li>
          <li><NavLink to="/books" state= "hi" >Books</NavLink> </li>
          
       </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/books/*" element={<BookRoute />} />
        
 {/*   <Route path='/books' element={<BookList />}/>
    <Route path='/books/:id' element={<Book />}/> 
    <Route path='/books/new' element={<NewBook />}/> */}
      <Route path='*' element={<NotFound />}/> 
      
    </Routes>
    </>
  );
}

export default App;
