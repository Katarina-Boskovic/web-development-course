import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return <div>
    {
      // map creates an array of all cards
      robots.map(user => {
        return (
          <Card key={user.id} id={user.id} name={user.name} email={user.email} /> // when you have an array need key: if an element grts deleted key makes sure react knows which one needs to be removed from DOM (doesn't  have to change the whole DOM)
        );
      })
    }
  </div>;
};

export default CardList;
