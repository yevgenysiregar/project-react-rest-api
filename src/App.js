import React from "react";
import "./App.css";
import GetPosts from "./components/getPosts";
import AddPosts from "./components/addPosts";

function App() {
  return (
    <div className="App">
      <GetPosts />
      <AddPosts />
    </div>
  );
}

export default App;
