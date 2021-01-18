import React, { useState, useEffect, useRef } from "react";
import Aside from "./Aside.js";
import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import Show from "./Show.js";
import "../css/show.css";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  // INDEX / GET
  const getTweets = async () => {
    try {
      const res = await fetch("http://localhost:3000/tweets");
      const json = await res.json();
      setTweets(json);
    } catch (err) {
      console.error(err);
    }
  };

  // CREATE
  const createTweet = async (e, id) => {
    e.preventDefault();
    // let noteHolder = noteInput.current.value;
    let newTweet = JSON.stringify({
      title: titleInput,
      content: contentInput,
      author: authorInput,
    });
    e.currentTarget.reset();
    try {
      const response = await fetch("http://localhost:3000/tweets", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: newTweet,
      });
      const data = await response.json();
      let allTweets = [...tweets, data];
      console.log(allTweets);
      // Please test this.
      // Can't remember what post returns
      setTweets(allTweets);
      setContentInput("");
      setTitleInput("");
      setAuthorInput("");
    } catch (error) {
      console.error(error);

    }
  };

  // DELETE
  const deleteTweet = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/tweets/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      const filteredTweets = tweets.filter((x) => x._id !== data._id);
      setTweets(filteredTweets);
    } catch (error) {
      console.error(error);
    }
  };
  


  useEffect(() => {
    getTweets();
  }, []);
  return (
    <>
      <NavBar />
      <Aside />
      <h2>Index</h2>
      <Show
        getTweets={getTweets}
        // the below will need to be updated with the map route
        // tweet={tweet}
      />
      <form onSubmit={createTweet}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="tweet-title-input"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <label htmlFor="title">Author</label>
        <input
          type="text"
          id="author"
          className="tweet-author-input"
          value={authorInput}
          onChange={(e) => setAuthorInput(e.target.value)}
        />
        <label htmlFor="year">Content</label>
        <input
          type="text"
          id="content"
          className="tweet-content-input"
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        />
        <input type="submit" value="Tweet" className="tweet-create-button" />
      </form>
      <Footer />
    </>
  );
};

export default Home;
