import React from "react";
import { Card } from "./components/Card";
export const CardList = props => {
  return (
    <div>
      {props.profiles.map(profile => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};
