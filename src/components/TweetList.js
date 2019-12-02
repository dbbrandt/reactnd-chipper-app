import React from "react";
import Tweet from "./Tweet";

const TweetList = props => {
  return (
    <div>
      <ul className="dashboard-list">
        {props.tweetIds.map(id => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetList;
