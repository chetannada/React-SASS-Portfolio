import { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="left">
          <h2>Reach Out to me!</h2>
          <h3>
            Discuss a Project or just want to say Hi? My inbox is open for all.
          </h3>
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact me</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message..." required></textarea>
            <button type="submit">
              Submit <TelegramIcon className="submit" />
            </button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
      <div className="footer">
        <h3>
          Created By{" "}
          <a
            href="https://www.linkedin.com/in/chetannada/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Chetan Nada
          </a>{" "}
          | <CopyrightIcon className="copy" /> 2021 All rights reserved
        </h3>
      </div>
    </div>
  );
}
