import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const BookList = (props) => {
  return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.entries(props.shelves).map(([key, value]) => 
              <div className="bookshelf" key={value}>
                  <h2 className="bookshelf-title">{key}</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                      {props.books.filter(book => book.shelf === value).map(filteredBook =>
                      <li key={filteredBook.id}>
                          <Book book={filteredBook} onAddBook={props.onUpdateBook}/>
                      </li>
                      )}
                  </ol>
                  </div>
              </div>
          )}
        </div>
      </div>
      <div className="open-search">
      <Link to='/search'><button>Add a Book</button></Link>
      </div>
      
    </div>
  )
}

export default BookList