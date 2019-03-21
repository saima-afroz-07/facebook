import React, { Component } from 'react';
// import NewsFeed from './components/newsFeeds'

import './App.css';
import SearchBar from './components/searchBar';
import Post from './components/post-grp/post'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#e9ebee"}}>
        
        <SearchBar />
        <br/>
        <br/>
        <center><Post /></center>
      </div>
    );
  }
}

export default App;
