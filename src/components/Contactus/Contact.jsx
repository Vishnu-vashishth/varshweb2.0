import React from 'react';
import "./Contactus.scss";
import { NavLink } from 'react-router-dom';

export default function Contact() {

const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Your message has been sent.";
      document.querySelector(".alert_style").style.display = "block";

      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! There was a problem delivering your message, please contact via other means.";
      document.querySelector(".alert_style").style.display = "block";

      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form?.addEventListener("submit", handleSubmit);

  return (
    <>
    <section className="contact section" id="contact" style={{margin:"15px"}}>
      <h1 className="section_title">Contact Us</h1>
      <span className="section_subtitle">
        Want to connect? Our inbox is always open!!
      </span>

      <div className="contact_container container grid">
        <div>
          <a href="mailto:admin@varshservices.com" target="_blank" rel="noreferrer">
            <div className="contact_info">
              <i className="uil uil-envelope-alt contact_icon"></i>
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">admin@varshservices.com</span>
              </div>
            </div>
          </a>

          <a href="/">
            <div className="contact_info">
              <i className="uil uil-calendar-alt contact_icon"></i>
              <div>
                <h3 className="contact_title">Online Meet</h3>
                <span className="contact_subtitle">Schedule an Online Meet</span>
              </div>
            </div>
          </a>

          <a href="/">
            <div className="contact_info">
              <i className="uil uil-twitter-alt contact_icon"></i>
              <div>
                <h3 className="contact_title">Twitter</h3>
                <span className="contact_subtitle">Varsh Services</span>
              </div>
            </div>
          </a>

          <a href="https://goo.gl/maps/7TjTfEN68dVSbea57" target="_blank" rel="noreferrer">
            <div className="contact_info">
              <i className="uil uil-location-point contact_icon"></i>
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle"> Aditya world city, Ghaziabad 201002</span>
              </div>
            </div>
          </a>
        </div>

        <form action="https://formspree.io/f/xoqrwagd" className="contact_form grid" id="contact-form" method="POST">
          <div id="alert" className="alert_style"></div>
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input type="text" name="name" className="contact_input" id="name" required />
            </div>
            <div className="contact_content">
              <label htmlFor="email" className="contact_label">Email</label>
              <input type="email" name="email" className="contact_input" id="email" required />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="subject" className="contact_label">Subject</label>
            <input type="text" name="subject" className="contact_input" id="subject" required />
          </div>
          <div className="contact_content">
            <label htmlFor="message" className="contact_label">Message</label>
            <textarea name="message" id="" cols="0" rows="7" className="contact_input message" required></textarea>
          </div>

          <div>
            <button type="submit" className="button button-flex">
              Send Message
              <i className="uil uil-message button_icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
  );
}