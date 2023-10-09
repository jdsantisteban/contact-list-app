import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Card from "../component/Card.jsx";

export const Home = () => {
  // destructuring
  const { store } = useContext(Context);
  const { contact } = store;

  return (
    <div className="container w-50 mt-4">
      <div className="row">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to="/contactform">
            <button className="btn btn-success">Add new contact</button>
          </Link>
        </div>

        <div className="mt-2">
          {contact.map((person) => {
            return <Card key={person.id} person={person} />;
          })}
        </div>
      </div>
    </div>
  );
};
