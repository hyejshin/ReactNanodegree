import React, { PureComponent } from 'react'

class Book extends PureComponent {
    onChangeHandler = (event) => {
        this.props.onAddBook(this.props.book, event.target.value)
    }
    render() {
        const { book } = this.props
        const bookcover = book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${bookcover})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={this.onChangeHandler} value={book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{Array.isArray(book.authors)? book.authors.join(', '): ' '}</div>
            </div>
        )
    }
}

export default Book