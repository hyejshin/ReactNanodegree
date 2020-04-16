import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle';

class SearchBook extends Component {
    state = {
        query: '',
        books: []
    }
    onChangeHandler = (event) => {
        console.log('input')
        this.setState({
            query: event.target.value
        })
        if (event.target.value === '') {
            this.setState({ books: [] })
        } else {
            BooksAPI.search(event.target.value).then((data) => {
                if(data['error'] !== 'empty query') {
                    this.setState(() => ({
                        books: data.map(b => {
                            const index = this.props.books.findIndex(x => x.id === b.id)
                            b.shelf = index >= 0? this.props.books[index].shelf : 'none'
                            return b
                        })
                    }))
                }
            })
        } 
    }

    render() {
        const books = this.state.books
        return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                <Debounce time='400' handler='onChange'>
                    <input type="text" placeholder="Search by title or author" onChange={this.onChangeHandler}/>
                </Debounce>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {books.map(book =>
                    <li key={book.id}>
                        <Book book={book} onAddBook={this.props.onAddBook}/>
                    </li>
                    )}
                </ol>
            </div>
        </div>
        )
    }
}

export default SearchBook