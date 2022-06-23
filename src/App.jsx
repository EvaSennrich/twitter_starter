import * as React from "react";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import Advertisements from "./components/Advertisements/Advertisements";
import { codepathUserProfile, firstTweet, navLinks } from "./constants";
import { useState } from "react";
import TweetBox from "./components/TweetBox/TweetBox";

export default function App() {
  const [userProfile, setUserProfile] = useState(codepathUserProfile);
  const [tweets, setTweets] = useState([firstTweet]);
  const [tweetText, setTweetText] = useState("");

  // userProfile = navLinks.codepathUserProfile;~

  return (
    <div className="app">
      <Navbar navLinks={navLinks} />
      <main>
        <UserProfile userProfile={userProfile} />
        {/* ---ASK TO EXPLAIN THESE PROPS YOU'RE PASSING FROM FEED COMPONENT SPREAD OPERATOR???-- */}
        {/* Pass both the tweetText and setTweetText props from the Feed component down into the TweetBox component. */}
        <Feed tweets={tweets} setTweets={setTweets} userProfile={userProfile} tweetText={tweetText} setTweetText={setTweetText} />
        <Advertisements />
      </main>
    </div>
  );
}
