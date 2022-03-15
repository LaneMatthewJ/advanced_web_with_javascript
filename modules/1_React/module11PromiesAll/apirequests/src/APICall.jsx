import React, { useState, useEffect } from "react";
import NodeCache from "node-cache";
import shuffle from "lodash/shuffle";
// initializing the cache
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const Reddit = props => {
  const cacheKey = "subreddits";
  const cachedStuff = myCache.get(cacheKey);
  const startingArrays = cachedStuff || [];

  const [allPosts, setAllPosts] = useState(startingArrays);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(startingArrays);

  const callWithFetch = async () => {
    if (cachedStuff) {
      setAllPosts(cachedStuff);
      setPosts(cachedStuff);
      return;
    }

    const urls = [`r/${props.subreddit}.json`, `r/birdswitharms.json`];

    const subredditArrays = urls.map(async url => {
      const response = await fetch(url);
      const json = await response.json();
      const allPosts = json.data.children.map(obj => obj.data);

      return allPosts;
    });

    const awaitedThings = await Promise.all(subredditArrays);

    console.log("THINGS", awaitedThings);
    const allPosts = awaitedThings.flat();

    console.log("All posts: ", allPosts);
    const shuffledData = shuffle(allPosts);

    myCache.set(cacheKey, shuffledData, 100);

    setAllPosts(shuffledData);
    setPosts(shuffledData);
  };

  useEffect(() => {
    if (allPosts.length === 0) callWithFetch();
  });

  useEffect(() => {
    document.title = `Showing ${posts.length} posts`;
  }, allPosts);

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
