import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Book from './Book';
import BookLayout from './BookLayout';
import BookList from './BookList';
import NewBook from './NewBook';


const BookRoute = () => {
  return (
    <>
    <BookLayout />
    <Routes>
      <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element= {<NewBook />} />
    </Routes>
    </>
  )
}

export default BookRoute
