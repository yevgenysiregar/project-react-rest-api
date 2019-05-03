import React, { Component } from "react";
import axios from "axios";

export default class GetPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.posts);

    return (
      <div>
        {this.state.posts.map((post, index) => {
          return (
            <div key={index}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
