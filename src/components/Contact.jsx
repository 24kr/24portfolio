import { useState, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "", email: "", phone: "", message: ""
  });

  const inputRefs = useRef([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (index) => {
    const container = inputRefs.current[index].parentNode;
    container.classList.add('focus');
  };

  const handleBlur = (index) => {
    const container = inputRefs.current[index].parentNode;
    const input = inputRefs.current[index];
    if (!input.value) {
      container.classList.remove('focus');
    }
  };

  const contactMethods = [
    { icon: "uil uil-envelope-edit", title: "Email", data: "user@gmail.com", button: "Write me" },
    { icon: "uil uil-whatsapp", title: "Whatsapp", data: "999-888-777", button: "Write me" },
    { icon: "uil uil-facebook-messenger", title: "Messenger", data: "user.fb123", button: "Write me" },
  ];

  const formFields = [
    { name: "username", type: "text", label: "Username" },
    { name: "email", type: "email", label: "Email" },
    { name: "phone", type: "tel", label: "Phone" },
  ];

  return (
    <section id="contact" className="section">
      <h2 className="section-title" data-heading="Get in Touch">Contact me</h2>

      <div className="contact-container container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="contact-content">
          <div className="contact-info grid gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-card bg-box rounded-lg p-6 text-center hover:transform hover:scale-105 transition-transform duration-300">
                <i className={`${method.icon} text-2xl text-title block mb-3`}></i>
                <h3 className="contact-card-title text-sm font-medium text-title mb-1">{method.title}</h3>
                <span className="contact-card-data text-sm block mb-4">{method.data}</span>
                <span className="contact-button text-skin text-sm flex items-center justify-center cursor-pointer group">
                  {method.button}
                  <i className="uil uil-arrow-right ml-1 transition-transform group-hover:translate-x-1"></i>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-content">
          <form className="contact-form">
            {formFields.map((field, index) => (
              <div key={field.name} className="input-container relative my-8">
                <input
                  ref={el => inputRefs.current[index] = el}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus(index)}
                  onBlur={() => handleBlur(index)}
                  className="input w-full border-2 border-text bg-transparent px-4 py-3 rounded text-title font-medium outline-none transition-colors focus:border-skin"
                />
                <label className="absolute left-4 top-1/2 transform -translate-y-1/2 px-2 bg-body text-text pointer-events-none transition-all duration-300">
                  {field.label}
                </label>
                <span className="absolute left-6 top-0 transform -translate-y-1/2 text-sm px-1 bg-body text-transparent pointer-events-none transition-all duration-300">
                  {field.label}
                </span>
              </div>
            ))}

            <div className="input-container textarea relative my-8">
              <textarea
                ref={el => inputRefs.current[3] = el}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus(3)}
                onBlur={() => handleBlur(3)}
                className="input w-full border-2 border-text bg-transparent px-4 py-3 rounded text-title font-medium outline-none transition-colors focus:border-skin min-h-[140px] resize-none"
              ></textarea>
              <label className="absolute left-4 top-4 px-2 bg-body text-text pointer-events-none transition-all duration-300">
                Message
              </label>
              <span className="absolute left-6 top-0 transform -translate-y-1/2 text-sm px-1 bg-body text-transparent pointer-events-none transition-all duration-300">
                Message
              </span>
            </div>

            <button type="submit" className="button mt-4">
              <i className="uil uil-navigator mr-2"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;