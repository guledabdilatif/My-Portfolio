import React, {useEffect} from "react";
import "./contact.css"
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uh6fnca', 'template_9yk8fdi', form.current, 'pkv6Hk2vfgDK_lg21')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
   return (
    <section id="Contact" className="container" data-aos="fade-up">
      <h5 className="text-center">Get in Touch</h5>
      <h1 className="text-center">Contact Me</h1>
      <div className="row">
        <div className="col-md-5">
          <div className="contact-container text-center">
            <div className="contact-card text-center" data-aos="fade-up">
              <RxEnvelopeClosed className="icon" />
              <h6>Email</h6>
              <h6>guledabdilatif@gmail.com</h6>
              <a href="mailto:guledabdilatif@gmail.com"  target='_blank'>Send a Message</a>
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
              <a href="https://wa.me/+254723710285"  target='_blank'>Send a Message</a>
            </div>
          </div>
        </div>
        <div className="col-md-7" data-aos="fade-up">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" />

            <input type="email" name="user_email" placeholder="Email" />

            <textarea
              name="message"
              placeholder=" Your Message"
              cols="30"
              rows="10"
            />
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
