import React, { Component } from 'react'
import ChatContent from '../chatContent/ChatContent';
import ChatList from '../chatList/ChatList';
import "./chatbody.css";

type MyProps = {
    // using `interface` is also ok
    
  };
  type MyState = {
    count: number; // like this
  };
  class ChatBody extends React.Component<MyProps> {
    render() {
      return (
        <div className="main__chatbody">
          <ChatList />
          <ChatContent />
        </div>
      );
    }
  }

  export default ChatBody;