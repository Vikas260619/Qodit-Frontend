import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackgroundSVG } from "../BackgroundSVG";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else setMessage(value);
  };
  const data = { name, email, message };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const API = "https://qoditdev.herokuapp.com";
    const res = await axios.post(`${API}/contactus/`, data).then((res) =>
      res.data === "Email sent successfully"
        ? toast.success("Email sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : null
    );
  };

  return (
    <div>
      <BackgroundSVG />
      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: " relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div id="contact_us">
        <div className="container">
          <div className="section-title">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-title">
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>
          </div>
          <div className="row">
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                <h3>USA Office Address:</h3>
                <h5>1309 Coffeen Avenue 1200, Sheridan, WY 82801, USA</h5>
              </div>
            </div>
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                <h3 className="text-center">India Office Address:</h3>
                <h5 className="text-center">
                  51, Electronic Complex, Pardesipura, Indore, Madhya Pradesh
                  452007
                </h5>
              </div>
            </div>
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <h3 className="text-center">Email</h3>
                <h5 className="text-center">info@qodit.io</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container form-sec">
          <div className="row">
            <div className="col-md-5 justify-content-center contact-info">
              <img src="./img/Contact_us.png" width="100%" alt="" />
            </div>
            <div className="col-md-7 form-contact">
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control contactFormStyle"
                    rows="4"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
