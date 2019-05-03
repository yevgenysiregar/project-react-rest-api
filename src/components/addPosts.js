import React, { Component } from "react";
import axios from "axios";

export default class AddPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      body: ""
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
      .catch(error => {
        console.log(error);
      });
  }

  changeData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitResult = event => {
    event.preventDefault();
    const data = {
      title: this.state.title,
      body: this.state.body
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  updatePosts = event => {
    event.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "Hello",
        body: "Cheers!"
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form>
          Add Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.changeData}
          />
          Add Body:
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.changeData}
          />
          <input
            type="submit"
            value="Add Post"
            name="Add"
            onClick={this.submitResult}
          />
          <input
            type="submit"
            value="Update Post"
            name="Update"
            onClick={this.updatePosts}
          />
        </form>
      </div>
    );
  }
}
