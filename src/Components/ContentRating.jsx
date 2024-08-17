import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike: () => {
            this.setState((prevState) => ({
              likes: prevState.likes + 1,
              totalRatings: prevState.totalRatings + 1
            }));
          },
          handleDislike: () => {
            this.setState((prevState) => ({
              dislikes: prevState.dislikes + 1,
              totalRatings: prevState.totalRatings + 1
            }));
          }
      };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>**React** is a popular JavaScript library developed by Facebook for building fast, scalable, and interactive user interfaces, primarily for single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and handle dynamic content with ease. React's component-based architecture, virtual DOM, and powerful ecosystem make it a go-to choice for building modern web applications. With features like hooks and context API, React provides a flexible and intuitive way to develop robust front-end applications.</p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>

     </div>
     </>
    );
  }
}

export default ContentRating;
