import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './SearchBook'
import BookList from './BookList'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books: [] 
  }

  shelves = {
    'Currently Reading':'currentlyReading',
    'Want to Read':'wantToRead',
    'Read':'read'
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({books})

  }

  addBook = (book, shelf) => {
    book.shelf = shelf
    const ids = this.state.books.map(b => b.id)
    if (ids.includes(book.id)) {
      this.updateBook(book, shelf)
    } else {
      if (BooksAPI.update(book, shelf)) {
        this.setState((curr)=> ({
          books: [...curr.books, book]
        }))
      }
    }
  }

  updateBook = (book, shelf) => {
    if (BooksAPI.update(book, shelf)) {
      this.setState((curr)=> ({
        books: curr.books.map((b) => {
          if (b.id === book.id) {
            b.shelf = shelf
          }
          return b
        }) 
      }))
    }
  }
  
  render() {
    return (
      <div className="app">
        <Route path='/search' render={({history}) => (
          <SearchBook books={this.state.books} 
            onAddBook={(book, shelf) => {
            this.addBook(book, shelf)
            history.push('/') }}/>
        )}/>
        <Route exact path='/' render={() => (
          <BookList shelves={this.shelves} books={this.state.books} onUpdateBook={this.updateBook} />
        )}/>
          
      </div>
    )
  }
}

export default BooksApp
