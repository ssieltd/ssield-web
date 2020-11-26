import React from "react";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/ShenzhenSamSteelExports"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          {/* <a
            href="https://www.facebook.com"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a> */}
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/18584947/admin/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="skype:samf4755?chat"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <i className="fab fa-skype" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/8613714598749"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="weixin://dl/chat?13724322268"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <i className="fab fa-weixin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
