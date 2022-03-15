import React, { useState, useEffect } from "react";
import NodeCache from "node-cache";

// initializing the cache
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const Reddit = props => {
  // It's good to use a constant as your key so that you always
  // have the same key and don't accidentally use a mistyped key
  const cacheKey = "aww";

  // To get your stored items out of your cache, you simply
  // need to use `.get(KEYNAME)`
  const cachedStuff = myCache.get(cacheKey);

  // When retrieving cached data, if the data have timed out,
  // then they will be undefined. You can either use short
  // circuiting, or use lodash/get, or deal with the logic elsewhere
  const startingArrays = cachedStuff || [];

  console.log("cachedStuff", cachedStuff);

  const [allPosts, setAllPosts] = useState(startingArrays);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(startingArrays);

  const callWithFetch = async () => {
    // If we weren't doing the checking of our chached data above,
    // this is how we could programatically make sure we don't
    // attempt to set the state with undefined data.
    if (cachedStuff) {
      setAllPosts(cachedStuff);
      setPosts(cachedStuff);
      return;
    }

    const response = await fetch(`r/${props.subreddit}.json`);
    const json = await response.json();
    const allPosts = json.data.children.map(obj => obj.data);

    // Here we set our cache with our key, then add in our desired
    // data to be cahced, and finally enter our timeout.
    // Wait 100 seconds, and then change views. See how it
    // reloads once the time of the cache runs out.
    myCache.set(cacheKey, allPosts, 100);
    setAllPosts(allPosts);
    setPosts(allPosts);
  };

  // Use effect allows for us to program side effects with our
  // functional componennts. This way we can kick off a side
  // effect like a network call. What should be noted is that
  // this should be treated as if it were an equivalent to both
  // component did mount, and component did update.
  useEffect(() => {
    if (allPosts.length === 0) callWithFetch();
  });

  // UPDATE THE TITLE!
  useEffect(() => {
    document.title = `Showing ${posts.length} posts`;
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
