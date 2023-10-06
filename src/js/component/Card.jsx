import React from "react";

const Card = (props) => {
  const { person } = props;
  const { full_name, address, phone, email } = person;

  return (
    <div className="col-12 w-60">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{full_name}</h5>
          <p className="card-text">{address}</p>
          <p className="card-text">{phone}</p>
          <p className="card-text">{email}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
