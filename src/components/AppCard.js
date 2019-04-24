import React from "react";
import { CardList } from "./CardList";
import { Form } from "./Form";
export class AppCard extends React.Component {
  constructor(props) {
    super(props);
    this.title = "The GitHub Cards App";
  }
  state = {
    profiles: []
  };
  addNewProfile = profileData => {
    console.log(profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div className="appCard">
        <div className="header">{this.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
