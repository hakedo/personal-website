import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_tk45vle', 'template_noxfham', form.current, '_lFoq8oiDYclgRYHz')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });

      e.target.reset();
   };

   return (
      <section className="section" id="contact">
         <h2 className="section-title">Get in touch</h2>
         <div className="section-subtitle">
            <a href="mailto:hak3do@gmail.com" className="contact-button">
               hak3do@gmail.com{" "}
               <i className="bx bx-right-arrow-alt contact-button-icon"></i>
            </a>
            <a
               href="tel:+18187485046" className="contact-button">(818) 748 5046{" "}
               <i className="bx bx-right-arrow-alt contact-button-icon"></i>
            </a>
         </div>

         <div className="contact-container container grid">
            <div className="contact-content">
               <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="contact-form-div">
                     <label className="contact-form-tag">Name</label>
                     <input
                        type="text"
                        name="name"
                        className="contact-form-input"
                        placeholder="Insert your name"
                     />
                  </div>

                  <div className="contact-form-div">
                     <label className="contact-form-tag">Mail</label>
                     <input
                        type="email"
                        name="email"
                        className="contact-form-input"
                        placeholder="Insert your email"
                     />
                  </div>

                  <div className="contact-form-div contact-form-area">
                     <label className="contact-form-tag">Message</label>
                     <textarea
                        name="project"
                        cols="30"
                        rows="10"
                        className="contact-form-input"
                        placeholder="Write your message"
                     ></textarea>
                  </div>

                  <div className="contact-button-center">
                     <button className="button button-flex">
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
