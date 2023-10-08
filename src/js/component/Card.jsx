import React, { useContext } from "react";
import businessman from "../../img/businessman.jpeg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// components
import Confirm from "../views/Confirm.jsx";

const Card = (props) => {
  const { actions } = useContext(Context);
  const { person } = props;
  const { full_name, address, phone, email, id } = person;

  return (
    <div className="card mb-3 col-12 w-80">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={businessman}
            className="img-fluid rounded-circle mx-auto pt-3 d-block"
            alt="businessman"
            width={150}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h4 className="card-title">{full_name}</h4>
            <p className="card-text text-secondary">
              <span className="mx-2">
                <i className="fas fa-map-marker-alt" />
              </span>
              {address}
            </p>
            <p className="card-text text-secondary">
              <span className="mx-2">
                <i className="fas fa-phone" />
              </span>
              {phone}
            </p>
            <p className="card-text text-secondary">
              <span className="mx-2">
                <i className="fas fa-envelope"></i>
              </span>
              {email}
            </p>
          </div>
        </div>
        <div className="col-md-2 card-buttons d-flex justify-content-around pt-3">
          <span>
            <link to="/contact-form">
              <i className="fas fa-pencil-alt border border-secondary rounded-circle p-2 me-2"></i>
            </link>
            <Link to="/confirm">
              <i className="fas fa-trash border border-secondary rounded-circle p-2 me-2"></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
