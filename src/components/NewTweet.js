import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

class NewTweet extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    const { dispatch, id, history } = this.props;
    event.preventDefault();
    dispatch(handleAddTweet(this.state.text, id));
    id == null
      ? history.push("/")
      : this.setState({
          text: ""
        });
  };

  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;
    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            className="textarea"
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            maxLength={280}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={!text}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
