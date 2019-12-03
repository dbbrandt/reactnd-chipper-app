import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

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
    case ADD_TWEET:
      const { tweet } = action;
      let replyingTo = {};
      if (tweet.replyingTo !== null ) {
        const parent = state[tweet.replyingTo];
        replyingTo = {
          [parent.id]: {
            ...parent,
            replies: parent.replies.concat([tweet.id])
          }
        }
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo
      };
    default:
      return state;
  }
};

export default tweets;
