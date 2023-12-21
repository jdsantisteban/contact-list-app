import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

const ContactForm = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  
  const [contact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
    agenda_slug: "phantom",
  });
  
  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      actions.addContact(contact);
      navigate("/");
    } catch (error) {
      console.error("Error to add a new contact", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center border border-secondary mt-4 p-2 rounded-3">
          <div className="col-12 col-md-8">
            <h1 className="text-center">Add a new contact</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="full name"
                  name="full_name"
                  value={contact.full_name}
                  onChange={handleChange}
                />

                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                />

                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone"
                  name="phone"
                  value={contact.phone}
                  onChange={handleChange}
                />

                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter address"
                  name="address"
                  value={contact.address}
                  onChange={handleChange}
                />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary mt-2" type="submit">
                    save
                  </button>
                </div>
              </div>
            </form>
            <Link to="/">or get back to contacts</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
