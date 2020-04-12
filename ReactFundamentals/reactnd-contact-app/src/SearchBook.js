import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends Component {
    state = {
        query: ''
    }
    onSelect = (book) => {
        this.props.onAddBook(book)
    }
    onChangeHandler = (event) => {
        this.setState({
            query: event.target.value
        })
    }
    render() {
        const {books} = this.props
        return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.onChangeHandler}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {books.filter(book => book.title.includes(this.state.query) ||
                                      book.authors.filter(author => author.includes(this.state.query)).length > 0)
                      .map(filteredBook =>
                    <li key={filteredBook.id}>
                        <Book book={filteredBook} onAddBook={this.props.onAddBook}/>
                    </li>
                    )}
                </ol>
            </div>
        </div>
        )
    }
}

export default SearchBook