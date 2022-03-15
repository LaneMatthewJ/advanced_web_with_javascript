import React, { useState, useEffect } from "react";
import NodeCache from "node-cache";
import shuffle from "lodash/shuffle";
import { RedditCard } from "./RedditCard";

import { LinearProgress } from "@rmwc/linear-progress";
import "@material/linear-progress/dist/mdc.linear-progress.css";

import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

import { Elevation } from "@rmwc/elevation";
import "@material/elevation/dist/mdc.elevation.css";

// initializing the cache
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const Reddit = props => {
  const cacheKey = "subreddits";
  const cachedStuff = myCache.get(cacheKey);
  const startingArrays = cachedStuff || [];

  // Hooks
  const [allPosts, setAllPosts] = useState(startingArrays);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(startingArrays);

  // create a boolean hook for whether we want to see a loading bar:
  const [isLoading, setIsLoading] = useState(false);

  const callWithFetch = async () => {
    if (cachedStuff) {
      setAllPosts(cachedStuff);
      setPosts(cachedStuff);
      return;
    }

    // Set the is loading bar:
    setIsLoading(true);

    const urls = [`r/${props.subreddit}.json`, `r/birdswitharms.json`];

    const subredditArrays = urls.map(async url => {
      const response = await fetch(url);
      const json = await response.json();
      const allPosts = json.data.children.map(obj => obj.data);

      return allPosts;
    });

    const awaitedThings = await Promise.all(subredditArrays);
    const allPosts = awaitedThings.flat();
    const shuffledData = shuffle(allPosts);

    myCache.set(cacheKey, shuffledData, 100);
    setAllPosts(shuffledData);
    setPosts(shuffledData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (allPosts.length === 0) {
      callWithFetch();
    }
  });

  useEffect(() => {
    document.title = `Showing ${posts.length} posts`;
  });

  const handleSearch = event => {
    setSearchTerm(event.target.value);

    const filteredLists = allPosts.filter(post => {
      console.log("AUTHOR: ", post.author);

      return (
        post.title.includes(event.target.value) ||
        post.author.includes(event.target.value)
      );
    });

    setPosts(filteredLists);
  };

  const LoadingBarDisplay = () => {
    return <> {isLoading && <LinearProgress />}</>;
  };

  return (
    <div>
      <h1>r/{props.subreddit}</h1>
      <div> FILTER THE CUTENESS </div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <br />
      <LoadingBarDisplay />
      <br />
      <Grid>
        {posts.map(post => (
          <GridCell span={3} key={post.id}>
            <RedditCard post={post} />
          </GridCell>
        ))}
      </Grid>
    </div>
  );
};
