import React from "react";

export default function Contact() {
  return (
    <section className="mt-2" id="contact">
      <h1>Want to get in touch?</h1>
      <div className="form-group my-3">
        <label for="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group my-3">
        <label for="name">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="name"
          placeholder="Enter your email address"
        />
      </div>
      <div className="form-group my-3">
        <label for="name">Message</label>
        <textarea className="form-control" id="message" rows="8"></textarea>
      </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
    </section>
  );
}
