import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const ContactForm = () => {
  const [store, actions] = useContext(Context);
  const [id] = useParams();

  const [editContact, setEditContact] = useState();
  const [editName, setEditName] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateContact();
  };

  const updateContact = () => {
    setEditContact({
      full_name: editName,
      email: editEmail,
      agenda_slug: "phantom",
      address: editAddress,
      phone: editPhone,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="full name"
                  onChange={(event) => setEditName(event.target.value)}
                />

                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEditEmail(event.target.value)}
                />

                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone"
                  onChange={(event) => setEditPhone(event.target.value)}
                />

                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter address"
                  onChange={(event) => setEditAddress(event.target.value)}
                />

                <button type="submit" className="btn btn-primary">
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            or get back to contacts
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
