import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}

      {/* Pass both the tweetText and setTweetText props from the Feed component down into the TweetBox component. */}
      {/* spread operator */}
      <TweetBox {...props} />
      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>
      <div className="twitter-feed">
        {props.tweets.map((tweet) => {
          return <Tweet tweet={tweet} />;
        })}
      </div>
    </div>
  );
}
