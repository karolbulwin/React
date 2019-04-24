import React from "react";
export class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
          <div className="url">
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              See my GitHub profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}
