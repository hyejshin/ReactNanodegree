import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './SearchBook'
import BookList from './BookList'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.readState = {'Currently Reading':'currentlyReading', 'Want to Read':'wantToRead', 'Read':'read'}
    this.state = {
      books: [] 
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({books}))
    })
  }

  addBook = (id, status) => {
    this.setState((curr)=> ({
      books: curr.books.map((book) => {
        if (book.id === id) {
          book.shelf = status
        }
        return book
      })
    }))
  }
  
  render() {
    return (
      <div className="app">
        <Route path='/search' render={({history}) => (
          <SearchBook books={this.state.books} 
            onAddBook={(id, status) => {
            this.addBook(id, status)
            history.push('/') }}/>
        )}/>
        <Route exact path='/' render={() => (
          <BookList readState={this.readState} books={this.state.books} onAddBook={this.addBook}/>
        )}/>
          
      </div>
    )
  }
}

export default BooksApp
