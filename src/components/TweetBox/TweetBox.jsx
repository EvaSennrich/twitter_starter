import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";
import Tweet from "../Tweet/Tweet";
// import { sampleNewTweet } from "../../constants";

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value);
  };

  const handleOnSubmit = () => {
    console.log("WORKKKKKSSS");
    let newTweet = {
      //  The id of the newTweet should be equal to the current length of the tweets array. NOTE: This may require accessing additional props! Don't be afraid to explore multiple ways to pass data.
      id: props.tweets.length,
      // That object should have name and handle attributes equal to the name and handle attributes of the userProfile prop.
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    };
    //set the new tweet's `id` attribute equal to the current length of the `tweets` array.
    props.setTweets(props.tweets.concat(newTweet));
    //reseting he tweetText state variable to an empty string
    props.setTweetText("");
  };

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>;
}

// CHECK IF THIS CORRECT WAY TO PASS A FUNCTION AS A PROP
export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>
        Tweet
      </button>
    </div>
  );
}
