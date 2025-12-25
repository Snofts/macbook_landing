import {footerLinks} from "../constants/index.js";


const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple store or other retailers near you. Or
          call 08100 94305 82096
        </p>
        <img src="/logo.svg" alt="Logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved</p>

        <ul>
          {footerLinks.map(({label, link}) => (
            <li key={link.label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
