import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: "uil uil-envelope-edit",
      title: "Email",
      data: "user@gmail.com",
      button: "Write me",
    },
    {
      icon: "uil uil-whatsapp",
      title: "Whatsapp",
      data: "999-888-777",
      button: "Write me",
    },
    {
      icon: "uil uil-facebook-messenger",
      title: "Messenger",
      data: "user.fb123",
      button: "Write me",
    },
  ];

  return (
    <section id="contact" className="section">
      <h2 className="section-title" data-heading="Get in Touch">
        Contact me
      </h2>

      <div className="container mx-auto px-4">
        <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="contact-content">
            <div className="contact-info grid gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="contact-card bg-box rounded-lg p-6 text-center"
                >
                  <i
                    className={`${method.icon} contact-card-icon text-2xl text-title block mb-2`}
                  ></i>
                  <h3 className="contact-card-title text-sm font-medium text-title mb-1">
                    {method.title}
                  </h3>
                  <span className="contact-card-data text-sm block mb-4">
                    {method.data}
                  </span>
                  <span className="contact-button text-skin flex items-center justify-center cursor-pointer">
                    {method.button}
                    <i className="uil uil-arrow-right ml-1 transition-transform group-hover:translate-x-1"></i>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-content">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-container relative mb-6">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="input w-full border-2 border-text bg-transparent px-4 py-3 rounded text-title font-medium outline-none transition-colors focus:border-skin"
                />
                <label className="absolute left-4 top-1/2 transform -translate-y-1/2 px-1 bg-body text-text pointer-events-none transition-all duration-300">
                  Username
                </label>
                <span className="absolute left-7 top-0 transform -translate-y-1/2 text-sm px-1 bg-body text-transparent pointer-events-none">
                  Username
                </span>
              </div>

              <div className="input-container relative mb-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input w-full border-2 border-text bg-transparent px-4 py-3 rounded text-title font-medium outline-none transition-colors focus:border-skin"
                />
                <label className="absolute left-4 top-1/2 transform -translate-y-1/2 px-1 bg-body text-text pointer-events-none transition-all duration-300">
                  Email
                </label>
                <span className="absolute left-7 top-0 transform -translate-y-1/2 text-sm px-1 bg-body text-transparent pointer-events-none">
                  Email
                </span>
              </div>

              <div className="input-container relative mb-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input w-full border-2 border-text bg-transparent px-4 py-3 rounded text-title font-medium outline-none transition-colors focus:border-skin"
                />
                <label className="absolute left-4 top-1/2 transform -translate-y-1/2 px-1 bg-body text-text pointer-events-none transition-all duration-300">
                  Phone
                </label>
                <span className="absolute left-7 top-0 transform -translate-y-1/2 text-sm px-1 bg-body text-transparent pointer-events-none">
                  Phone
                </span>
              </div>

              <div className="input-container textarea relative mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input w-full border-2 border-text bg-transparent px-4 py-3 rounded text-title font-medium outline-none transition-colors focus:border-skin min-h-[140px] resize-none"
                ></textarea>
                <label className="absolute left-4 top-4 px-1 bg-body text-text pointer-events-none transition-all duration-300">
                  Message
                </label>
                <span className="absolute left-7 top-0 transform -translate-y-1/2 text-sm px-1 bg-body text-transparent pointer-events-none">
                  Message
                </span>
              </div>

              <button type="submit" className="button">
                <i className="uil uil-navigator"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
