import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Contact = () => {
  return (
    <div className="container py-5">

      {/* ---------- TITLE ---------- */}
      <h2 className="text-center mb-5">Get In Touch With Us</h2>

      {/* ---------- TOP INFO SECTION ---------- */}
      <div className="row text-center mb-5">

        {/* Phone */}
        <div className="col-md-4 mb-4">
          <div className="mb-2">
            <i className="bi bi-telephone fs-1 text-warning"></i>
          </div>
          <h5 className="fw-bold">PHONE</h5>
          <p className="text-secondary">08048034819</p>
        </div>

        {/* Address */}
        <div className="col-md-4 mb-4">
          <div className="mb-2">
            <i className="bi bi-geo-alt fs-1 text-warning"></i>
          </div>
          <h5 className="fw-bold">ADDRESS</h5>
          <p className="text-secondary">Ahmedabad, 380004</p>
        </div>

        {/* Email */}
        <div className="col-md-4 mb-4">
          <div className="mb-2">
            <i className="bi bi-envelope fs-1 text-warning"></i>
          </div>
          <h5 className="fw-bold">EMAIL</h5>
          <p>
            <a href="mailto:gopi@shreeswminarayantourism.com" className="text-decoration-none">
              jbhdswholiwrHkjflkafhnlh.com
            </a>
          </p>
        </div>
      </div>

      {/* ---------- FORM + BUSINESS HOURS ---------- */}
      <div className="row">

        {/* Contact Form */}
        <div className="col-md-7 mb-4">
          <h4 className="mb-4">Please Contact Us If You Have Any Queries</h4>

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Type Your Message..."
          ></textarea>

          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Your mobile number / email address"
            />
            <button className="btn btn-warning px-4 ms-2 text-white fw-bold">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Business Hours */}
        <div className="col-md-5">
          <h4 className="mb-4">Business Hours</h4>

          <ul className="list-unstyled">
            {[
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ].map((day, i) => (
              <li
                key={i}
                className="d-flex justify-content-between border-bottom py-2"
              >
                <span className="fw-semibold">{day}</span>
                <span className="text-secondary">10:00 AM - 08:00 PM</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;