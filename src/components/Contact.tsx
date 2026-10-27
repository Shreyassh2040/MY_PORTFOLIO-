import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hattureshreyas@gmail.com" data-cursor="disable">
                hattureshreyas@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916360095202" data-cursor="disable">
                +91 63600 95202
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span>Davanagere, Karnataka</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Shreyassh2040"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/shreyas-hatture-85718637a"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="mailto:hattureshreyas@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="/Shreyas_Hatture_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume (PDF) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Certifications &amp; Languages</h4>
            <p style={{ maxWidth: "260px", lineHeight: "1.6", fontSize: "14px", opacity: 0.85 }}>
              • IBM SkillsBuild - AI<br />
              • Growth School - AI Leaders<br />
              • Generative AI for Beginners<br />
              <br />
              <strong>Languages:</strong> English, Kannada, Hindi
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shreyas S Hatture</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
