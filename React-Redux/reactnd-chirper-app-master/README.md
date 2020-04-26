# Chirper Project

To help you solidify your understanding of React and Redux, we will do a project walkthrough. The project we'll be building is called “Chirper”. Building this simple Twitter clone will help you practice improving the predictability of an application's state; establishing strict rules for getting, listening, and updating the store; and identifying what state should live inside of Redux and what state should live inside of React components.


## Project Setup

* install the dependencies - `npm install`


## A Guide for the Planning Stages of Your Project

### 1. Identify What Each View Should Look Like ([mockup tools](https://codingsans.com/blog/mockup-tools))
    - View for the Dashboard Page
        - is located at the home route (`/`)
        - shows tweets sorted from most recently added at the top, to oldest at the bottom
        - each tweet shows author, time stamp, who the author is replying to, text, reply button, like button
    - View for the Tweet Page
        - is located at `/tweet/:id`
        - show an individual tweet: author, time stamp, reply button, like button
        - has reply form
        - shows all replies
    - New Tweet
        - is located at `/new`
        - has a textbox for adding a new tweet
### 2. Break Each View Into a Hierarchy of Components
    - Components for the Dashboard View
        - App: the overall container for the project
        - Navigation: displays the navigation
        - Tweets List: responsible for the entire list of tweets
        - Tweet: in charge of display the content for a single tweet
    - Components for the Tweet View
        - App: the overall container for the project
        - Navigation: displays the navigation
        - Tweet Container: displays a list of tweets
        - Tweet: displays the content for a single tweet
        - New Tweet: display the form to create a new tweet (reply)
    - Components for the New Tweet View
        - App: the overall container for the project
        - Navigation: displays the navigation
        - New Tweet: display the form to create a new tweet
### 3. Determine What Events Happen in the App
      (*italicize* the action and **bold** the data)
    - The Tweets List Component
        - *get* the **tweets**
    - The Tweet Component
        - *get* a particular tweet from a list of **tweets**
        - *get* the **authedUser** so the user can *toggle* the like on each **tweet**
        - *get* the **authedUser** so the user can *reply* to a **tweet**
    - The Tweet Container Component
        - *get* a specific tweet from a list of **tweets**
        - *get* the replies to a specific tweet from a list of **tweets**
    - New Tweet Component
        - *get* the **authedUser** so the user can *create* a new **tweet**
        - *set* the **text of the new tweet**
### 4. Determine What Data Lives in the Store
    - tweets, users, authedUser
    ``{
        tweets: {
            tweetId: { tweetId, authorId, timestamp, text, likes, replies, replyingTo},
            tweetId: { tweetId, authorId, timestamp, text, likes, replies, replyingTo}
        },
        users: {
            userId: {userId, userName, avatar, tweetsArray},
            userId: {userId, userName, avatar, tweetsArray}
        }
    }``

## License
Reference of the code:  [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).
