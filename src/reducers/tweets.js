import { RECEIVE_TWEETS, TOGGLE_TWEET, NEW_TWEET } from "../actions/tweets";

const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case TOGGLE_TWEET:
      console.log('Toggle Tweet: ', action);
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked ?
            state[action.id].likes.filter((uid) => uid !== action.authedUser)
            :
            state[action.id].likes.concat([action.authedUser])
        }
      };
    case NEW_TWEET:
      const { replyingTo } = action.tweet;
      const replyTweet = replyingTo ? state[replyingTo] : null;
      console.log('reducer NEW_TWEET: tweet :', action.tweet);
      console.log('reducer NEW_TWEET: replyTweet :', replyTweet);
      return  replyTweet === null ? {
        ...state,
        [action.tweet.id]: {...action.tweet}
      } : {
        ...state,
        [action.tweet.id]: {...action.tweet},
        [replyTweet.id]: {
          ...replyTweet,
          replys: replyTweet.replys.concat(replyingTo)
        }
      };
    default:
      return state;
  }
};

export default tweets;
