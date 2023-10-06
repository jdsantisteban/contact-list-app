import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

// components
import Card from "../component/Card.jsx";

export const Home = () => {
  // destructuring
  const { store } = useContext(Context);
  const { contact } = store;

  return (
    <div className="container w-50">
      <div className="row">
        {contact.map((person) => {
          return <Card key={person.id} person={person} />;
        })}
      </div>
    </div>
  );
};
