import React, { Component } from 'react'

class Book extends Component {
    onChangeHandler = (event) => {
        this.props.onAddBook(this.props.book.id, event.target.value)
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={this.onChangeHandler} value={this.props.book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.map(author => `${author} `)}</div>
            </div>
        )
    }
}

export default Book