import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookList extends Component {

    render() {
        const {books, readState, onAddBook} = this.props
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.entries(readState).map(([key, value]) => 
                    <div className="bookshelf" key={value}>
                        <h2 className="bookshelf-title">{key}</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.filter(book => book.shelf === value).map(filteredBook =>
                            <li key={filteredBook.id}>
                                <Book book={filteredBook} onAddBook={onAddBook}/>
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
}

export default BookList