import React from "react";
import axios from "axios";
import superagent from "superagent";

export class Reddit extends React.Component {
  state = {
    allPosts: [],
    searchTerm: "",
    posts: []
  };

  baseURL = "https://www.reddit.com/";

  callWithFetch = () => {
    fetch(`r/${this.props.subreddit}.json`)
      .then(response => {
        console.log("response?", response);
        if (response) {
          console.log(response);
          return response.json();
        }
        throw new Error("FAILURE!");
      })
      .then(json => {
        console.log("STUFF?", json);
        const allPosts = json.data.children.map(obj => obj.data);
        this.setState({ allPosts, posts: allPosts });
      })
      .catch(error => console.error(error));
  };

  callWithAxios = () => {
    axios
      .get(`${this.baseURL}r/${this.props.subreddit}.json`)
      .then(response => {
        const allPosts = response.data.data.children.map(obj => obj.data);
        this.setState({ allPosts, posts: allPosts });
      })
      .catch(error => {
        console.error(error);
      });
  };

  callWithSuperAgent = () => {
    superagent
      .get(`${this.baseURL}r/${this.props.subreddit}.json`)
      .end((err, res) => {
        if (err) {
          console.error(err);
        }

        const responseData = JSON.parse(res.text);
        const allPosts = responseData.data.children.map(obj => obj.data);
        this.setState({ allPosts, posts: allPosts });
      });
  };

  componentDidMount() {
    this.callWithFetch();
  }

  handleSearch = event => {
    this.setState({
      searchTerm: event.target.value,
      posts: this.state.allPosts.filter(post =>
        post.title.includes(event.target.value)
      )
    });
  };

  render() {
    const { allPosts } = this.state;

    console.log("render allPosts", allPosts);
    return (
      <div>
        <h1>r/{this.props.subreddit}</h1>
        <div> FILTER THE CUTENESS </div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />
        <ul>
          {this.state.posts.map(post => (
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
  }
}
