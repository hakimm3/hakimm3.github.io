import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'dotenv/config'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    toast.info("Sending message...", {
      position: toast.POSITION.TOP_RIGHT,
    });


    var templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      to_name: "Trisa Abdul Hakim",
      message: formData.message,
    };

    emailjs
      .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams)
      .then(
        function (response) {
          toast.success("Message sent!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        function (error) {
          toast.error("Message failed to send!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
  }

  function handleChange(event) {
    setFormData((prevData) => {
      const { name, value } = event.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <section className="mt-2" id="contact">
        <h1>Want to get in touch?</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="name">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="form-group my-3">
            <label>Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="8"
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>
        {/* <button onClick={notify}>test</button> */}
      </section>
      <ToastContainer />
    </>
  );
}
