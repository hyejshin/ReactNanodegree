import React, { Component } from 'react';

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class ListLikedUsers extends Component {
  render() {
    const {likedUsers, users} = this.props;
    if(!likedUsers || likedUsers.length == 0) {
      return <p>None of the current users liked this movie.</p>
    }
    const likeUserList = likedUsers.map(userId => (
      <li>{users[userId].name}</li>
    ));
    return (
      <div>
      <p>Liked By:</p>
      <ul>{likeUserList}</ul>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.userByMovie = {};

    profiles.forEach(profile => {
      const movieIdx = profile.favoriteMovieID;

      if(this.userByMovie[movieIdx]) {
        this.userByMovie[movieIdx].push(profile.userID);
      } else {
        this.userByMovie[movieIdx] = [profile.userID];
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        {
          Object.keys(movies).map(id => (
            <div>
              <h2>{movies[id].name}</h2>
              <ListLikedUsers likedUsers={this.userByMovie[id]} users={users}/>
            </div>
          ))
        }
      </div>
    );
  }
}



export default App;