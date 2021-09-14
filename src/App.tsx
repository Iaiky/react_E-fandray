import React, { Component } from 'react'
import Nav from "./components/Nav/Nav"
import ChatBody from "./components/chatBody/ChatBody"
import UserProfile from './components/userProfile/UserProfile';


type MyProps = {
    // using `interface` is also ok
    
  };
  type MyState = {
    count: number; // like this
  };
  class App extends React.Component<MyProps> {
    render() {
      return (
        <div className= "__main">
          <Nav />
          <ChatBody />
          <UserProfile />
        </div>
      );
    }
  }

  export default App;