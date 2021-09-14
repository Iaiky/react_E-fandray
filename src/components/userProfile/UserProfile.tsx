import React, { Component } from 'react'
import "./userProfile.css"


class UserProfile extends React.Component<any, any> {
    toggleInfo = (e) => {
        e.target.parentNode.classList.toggle("open");
      };

    render() {
      return (
        <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="Naej.png" />
          </div>
          <h2>Iaikitiana Jean</h2>
          <h1>IGGLIA3 N°75</h1>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
      );
    }
  }

  export default UserProfile;