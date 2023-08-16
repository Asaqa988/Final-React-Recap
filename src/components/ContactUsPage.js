import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-6">
          <h2 className="text-center">Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
