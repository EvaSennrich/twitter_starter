import * as React from "react";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import Advertisements from "./components/Advertisements/Advertisements";
import { codepathUserProfile, firstTweet, navLinks } from "./constants";
import { useState } from "react";

export default function App() {
  const [userProfile, setUserProfile] = useState(codepathUserProfile);
  const [tweets, setTweets] = useState([firstTweet]);

  // userProfile = navLinks.codepathUserProfile;

  return (
    <div className="app">
      <Navbar navLinks={navLinks} />
      <main>
        <UserProfile userProfile={userProfile} />
        {/* ---ASK TO EXPLAIN THESE PROPS YOU'RE PASSING FROM FEED COMPONENT SPREAD OPERATOR???-- */}
        <Feed tweet={tweets} setTweets={setTweets} userProfile={userProfile} />
        <Advertisements />
      </main>
    </div>
  );
}
