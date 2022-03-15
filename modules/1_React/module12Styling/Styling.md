# Styling With React

Styling your applications with CSS can be tedious. Luckily for us, others have built pre-styled web components in which we can place our react components. There are a number of pre-styled web components out there. It's likely you've already come across [Bootstrap](https://getbootstrap.com/), [Material](https://material.io/), or possibly [Semantic](https://semantic-ui.com/).  Luckily for us, [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) and [React Material Web Components](https://rmwc.io/), and [Segment](https://react.semantic-ui.com/)  already exist for us. By using these pre-defined components, we can stand on the shoulders of giants, and riff off of their styling. While each of these are different in their own right, they're all more or less the same in their structure of how to install them. 



### Installation: 

Each of these have their own installation guides. You just need to make sure that you include the proper links within your header in your `public/index.html` file. 



### Using: 

There's no point in reinventing the wheel. With these packages, you need only to import the required material, and then use them as their own JSX elements. Let's start with adding a linear loader to our page to make it apparent that we're loading data (the remainder of the code is from the previous lesson): 

```react
import React, { useState, useEffect } from "react";
import NodeCache from "node-cache";
import shuffle from "lodash/shuffle";

import { LinearProgress } from "@rmwc/linear-progress";
import "@material/linear-progress/dist/mdc.linear-progress.css";

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
    setPosts(allPosts.filter(post => post.title.includes(event.target.value)));
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
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <br />
            <img src={post.thumbnail} />
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

```



#### Creating New Components: 

Now that we have our loading bar set, let's futz with some of the pre-supplied component structure from the documentation. Reddit has a list like structure, but let's revamp it to have cards. First we'll need to take the basic card from the [RMWC documentation](https://rmwc.io/cards) and change it up!  First we need to make sure that we import the `Card` data and the `Typography` data. 

```react
...

import {
  Card,
  CardMedia,
  CardPrimaryAction,
  CardActionIcon,
  CardActions,
  CardActionIcons,
  CardMediaContent
} from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

...

const RedditCard = ({ post }) => {
  return (
    <Card style={{ width: "12.5rem" }}>
      <CardPrimaryAction>
        <CardMedia
          square
          style={{
            backgroundImage: `url(${post.thumbnail})`
          }}
          >
          <CardMediaContent>
            <Typography
              use="subtitle2"
              tag="div"
              theme="textPrimaryOnDark"
              style={{
                padding: "0.5rem 1rem",
                  backgroundImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)",
                    bottom: "0",
                      left: "0",
                        right: "0",
                          position: "absolute"
              }}
              >
              {post.title}
            </Typography>
          </CardMediaContent>
        </CardMedia>
      </CardPrimaryAction>
      <CardActions>
        <CardActionIcons>
          <a href={post.url}>
            <CardActionIcon icon="comment" />
          </a>
          <CardActionIcon onIcon="favorite" icon="favorite_border" />
          <CardActionIcon icon="bookmark_border" />
          <CardActionIcon icon="share" />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
};

... 
```

Now we've got a solid card to display our data! 

#### Adding a Grid for Our Cards: 

We have our cards set up, but they're acting as block elements. What we need to do is place them inside of a grid! Luckily for us, instead of having to use flexbox or some other methods of adding grid data, we can just import the [RMWC Layout Grid](https://rmwc.io/layout-grid) system:  

```react
... 

import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

... 


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
```



#### Creating a new Component:

We've added our RedditCard to our `APICall.jsx`, but the file is getting too big! So, let's create a brand new stateless component just for our card: 

```react
import React from "react";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActionIcon,
  CardActionIcons,
  CardActionButton,
  CardActionButtons,
  CardActions
} from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

export const RedditCard = ({ post }) => {
  console.log(post);

  return (
    <Card style={{ width: "21rem" }}>
      <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          style={{
            backgroundImage: `url(${post.thumbnail})`
          }}
        />
        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <Typography use="headline6" tag="h2">
            {post.title}
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="textSecondaryOnBackground"
            style={{ marginTop: "-1rem" }}
          >
            by {post.author}
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <a href={post.url}>
            <CardActionButton>Read</CardActionButton>
          </a>
          <CardActionButton>Bookmark</CardActionButton>
        </CardActionButtons>
        <CardActionIcons>
          <CardActionIcon onIcon="favorite" icon="favorite_border" />
          <CardActionIcon icon="share" />
          <CardActionIcon icon="more_vert" />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
};

```

Now we've got our APICall.jsx a bit cleaned up: 

```react
import React, { useState, useEffect } from "react";
import NodeCache from "node-cache";
import shuffle from "lodash/shuffle";
import { RedditCard } from "./RedditCard";

import { LinearProgress } from "@rmwc/linear-progress";
import "@material/linear-progress/dist/mdc.linear-progress.css";

import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

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
    setPosts(allPosts.filter(post => post.title.includes(event.target.value)));
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

```



