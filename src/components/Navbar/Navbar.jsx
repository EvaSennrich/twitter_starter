import * as React from "react";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import "./Navbar.css";
import { useEffect } from "react";

export default function Navbar({ navLinks }) {
  // useEffect(() => {
  //   console.log("navbar works");
  // }, []);
  return (
    <nav>
      <div className="navbar-container">
        <NavLinks navLinks={navLinks} />
        <TwitterIcon />
        <SearchBar />
        <TweetButton />
      </div>
    </nav>
  );
}

export function NavLinks({ navLinks }) {
  // useEffect(() => {
  //   console.log("navLINKS works");
  // }, []);
  return (
    <ul className="nav-links">
      {navLinks.map((link, key) => {
        return <NavLink navLink={link} key={key} />;
      })}
    </ul>
  );
}

export function NavLink({ navLink }) {
  // useEffect(() => {
  //   console.log("navLIIINKKKK works");
  // }, []);
  return (
    <li className={navLink.className}>
      <i className={navLink.icon}></i>
      <span>{navLink.label}</span>
    </li>
  );
}

export function TwitterIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-twitter"></i>
    </div>
  );
}

export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search Twitter" />
      <i className="fas fa-search"></i>
    </div>
  );
}

export function TweetButton() {
  return (
    <div className="tweet-button">
      <AvatarIcon />

      <button>Tweet</button>
    </div>
  );
}
