import './App.css';
import React,{useEffect, useState} from 'react';
import {getBookAPI, addBookAPI,updateBookAPI, deletedAPI} from "./Apis/books";
import TableBook from './Components/TableBook';
import CreateBook from './Components/CreateBook';

function App() {

  const [books, setBooks]=useState([]);
  useEffect(()=>{getBookAPI().then(books=>setBooks(books))},[]);

  // Add Books
  const addBook=(book)=>{
    return addBookAPI(book).then(data=>{
      setBooks([...books,data])
    })
  }

  // Update Book

  const updateBook=(book)=>{
    return updateBookAPI(book).then(data=>{return(data)})
  }

  // delete booksreq.accepts(types);
  const deleteBook  =(id)=>{
    return deletedAPI(id).then(data=>{
      if(data.deletedCount===1){
        setBooks(books.filter(book=>book._id !== id))
      }
    })
  }


  return (
    <div className="App">
      <CreateBook onCreate={addBook}></CreateBook>
     <TableBook books={books} onDelete={deleteBook} onUpdate={updateBook}></TableBook>
    </div>
  );
}

export default App;
