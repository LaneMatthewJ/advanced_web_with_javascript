import React, { useState, useEffect } from "react";
import NodeCache from "node-cache";
const myCache = new NodeCache({ stdTTL: 100, checkPeriod: 120 });

export const RedditHookComponent = props => {
  const baseURL = "https://www.reddit.com/";

  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);

  const callWithFetch = async () => {
    const response = await fetch(`r/${props.subreddit}.json`);
    console.log("response?", response);
    const json = await response.json();
    const allPosts = json.data.children.map(obj => obj.data);

    setAllPosts(allPosts);
    setPosts(allPosts);
  };

  // WHAT HAPPENED OH NO :D
  // useEffect(() => callWithFetch());
  useEffect(() => {
    if (allPosts.length === 0) callWithFetch();
  });

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setPosts(allPosts.filter(post => post.title.includes(event.target.value)));
  };

  return (
    <div>
      <h1>r/{props.subreddit}</h1>
      <div> FILTER THE CUTENESS </div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <br />
            <img src={post.thumbnail} />
            {post.title}
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};
