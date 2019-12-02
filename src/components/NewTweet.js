import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleNewTweet } from "../actions/tweets";
import NavBar from "./NavBar";

class NewTweet extends Component {
  state = {
    text: ''
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })

  };

  handleSubmit = (event) => {
    const { author, replyingTo } = this.props;
    const { text } = this.state;
    event.preventDefault();
    console.log('handSubmit: ', author);
    this.props.dispatch(handleNewTweet( text, author, replyingTo ));
    this.setState({
      text: ''
    })
  };

  render() {
    const { text } = this.state;
    {/* redirect to the home view if submitted */}

    const tweetLeft = 280 - text.length;
    return (
      <div className='container'>
        <NavBar/>
        <h3 className="center">Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit} >
          <textarea
            className="textarea"
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            maxLength={280}
          />
          {tweetLeft <= 100 &&
            <div className='tweet-length'>{tweetLeft}</div>
          }
          <button
            className='btn'
            type='submit'
            disabled={!text}
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, tweets }, { id }) => ({
  author: authedUser,
  replyingTo: tweets[id]
});

export default connect(mapStateToProps)(NewTweet);