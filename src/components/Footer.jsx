const Footer = () => {
  const footerLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com", icon: "uil uil-facebook-f" },
    { href: "https://www.instagram.com", icon: "uil uil-instagram" },
    { href: "https://www.x.com", icon: "uil uil-twitter" },
  ];

  return (
    <footer className="footer">
      <div className="footer-bg bg-box py-12">
        <div className="container mx-auto px-4">
          <div className="footer-container grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="footer-title text-3xl font-bold text-title mb-2">
                Mariam
              </h1>
              <span className="footer-subtitle text-sm text-title">
                Frontend Developer
              </span>
            </div>

            <ul className="footer-links flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link text-title hover:text-skin transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="footer-socials flex justify-center md:justify-end space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social text-title hover:text-skin transition-colors text-xl"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <p className="footer-copy text-sm text-center mt-12">
            &#169;{" "}
            <a
              href="https://codepen.io/leonam-silva-de-souza"
              className="text-title hover:text-skin transition-colors font-turret"
            >
              ULTRA CODE
            </a>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
