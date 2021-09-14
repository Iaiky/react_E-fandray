import React, { Component, createRef, useEffect } from 'react';
import Avatar from '../chatList/Avatar';
import ChatItem from './ChatItem';
import "./chatContent.css";


  class ChatContent extends Component<any, any> {
    messagesEndRef = createRef<any>();
    chatItms = [
      {
        key: 1,
        image:
          "Naej.png",
        type: "",
        msg: "Hi Z, How are you?",
      },
      {
        key: 2,
        image:
          "Z.jpg",
        type: "other",
        msg: "I am fine.",
      },
      {
        key: 3,
        image:
          "Z.jpg",
        type: "other",
        msg: "What about you?",
      },
      {
        key: 4,
        image:
          "Naej.png",
        type: "",
        msg: "Awesome these days.",
      },
      {
        key: 5,
        image:
          "Z.jpg",
        type: "other",
        msg: "Finally. Wanna hangout sometimes?",
      },
      {
        key: 6,
        image:
          "Naej.png",
        type: "",
        msg: "sure,wanna watch spider-man with you",
      },
      {
        key: 7,
        image:
          "Z.jpg",
        type: "other",
        msg: "Haha, good idea",
      },
    ];

    constructor(props: any){
      super(props);
      this.state = {
        chat: this.chatItms,
        msg:"",
      };
    }

    scrollToBottom = () => {
      this.messagesEndRef.current.scrollIntoView({ behavior : "smooth"});
    }

    componentDidMount(){
      window.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
          if (this.state.msg != ""){
            this.chatItms.push({
              key: 1,
              type: "",
              msg: this.state.msg,
              image: "Naej.png",
            });
            this.setState({ chat: [...this.chatItms]});
            this.scrollToBottom();
            this.setState({ msg: ""});
          }
        }
      });
      this.scrollToBottom();
    }

    onStateChange = (e) => {
      this.setState({ msg: e.target.value });
    };

    render() {
      return (
        <div className= "main__chatcontent">
          <div className= "content__header">
            <div className= "blocks">
              <div className="current-chatting-user">
                <Avatar 
                  isOnline="active"
                  image= "Z.jpg"
                />
                <p>Zendaya Coleman</p>
              </div>
            </div>

            <div className= "blocks">
              <div className= "settings"> 
                <button className= "btn-nobg">
                  <i className= "fa fa-cog"></i>
                </button>
              </div>
            </div>
          </div> 
          <div className="content-body">
            <div className="chat__items">
              {
                this.state.chat.map((itm: any, index: any) => {
                  return (
                    <ChatItem 
                      animationDelay={index + 2}
                      key={itm.key}
                      user={itm.type ? itm.type : "me"}
                      msg={itm.msg}
                      image={itm.image}
                    />
                  );
                })
              }
              <div ref = {this.messagesEndRef}/>
            </div>
          </div> 
          <div className="content__footer">
              <div className="sendNewMessage">
                <button className="addFiles">
                  <i className="fa fa-plus"></i>
                </button>
                <input 
                  type="text" 
                  placeholder="Type a message here"
                  onChange={this.onStateChange}
                  value={this.state.msg}
                />
                <button className="btnSendMsg" id="sendMsgBtn">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
          </div>        
        </div>
      );
    }
  }

  export default ChatContent;