import React, { useEffect } from "react";
import "./contact.css"
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "4558d96b-7737-4239-80e4-f3462e986684");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert('Your details have been successfully submitted ✅');
      console.log("Success", res);
      form.reset();
    } else {
      alert('Something went wrong. Please try again ❌');
    }
  };

  return (
    <section id="Contact" className="container" data-aos="fade-up">
      <h1 className="text-center">Contact Me</h1>
      <div className="row">
        <div className="col-md-5">
          <div className="contact-container text-center">
            <div className="contact-card text-center" data-aos="fade-up">
              <RxEnvelopeClosed className="icon" />
              <h6>Email</h6>
              <h6>guledabdilatif@gmail.com</h6>
              <a href="mailto:guledabdilatif@gmail.com" target='_blank'>Send a Message</a>
            </div>
            <div className="contact-card text-center" data-aos="fade-up">
              <BiPhoneCall className="icon" />
              <h6>Call</h6>
              <h6>+254723710285</h6>
              <a href="Tel:+254723710285" target='_blank'>Call</a>
            </div>
            <div className="contact-card text-center" data-aos="fade-up">
              <FaWhatsapp className="icon" />
              <h6>WhatsApp</h6>
              <h6>+254723710285</h6>
              <a href="https://wa.me/+254723710285" target='_blank'>Send a Message</a>
            </div>
          </div>
        </div>
        <div className="col-md-7" data-aos="fade-up">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />

            <input type="email" name="email" placeholder="Email" required />

            <textarea
              name="message"
              placeholder="Your Message"
              cols="30"
              rows="10"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
