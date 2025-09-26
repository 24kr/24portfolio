import { useState } from "react";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      id: 1,
      icon: "uil uil-web-grid",
      title: "Web Designer",
      modal: {
        title: "Web Designer",
        description:
          "I offer services with more than 3 years of experience with quality work to clients and companies",
        services: [
          "User Interface Development",
          "Web Page Development",
          "Interactive UX/UI Creations",
          "Company Brand Positioning",
          "Design and Mockup of products for companies",
        ],
      },
    },
    {
      id: 2,
      icon: "uil uil-arrow",
      title: "UI/UX Designer",
      modal: {
        title: "UI/UX Designer",
        description:
          "I offer services with more than 5 years of experience with quality work to clients and companies",
        services: [
          "Usability Testing",
          "User Research",
          "Interaction Design",
          "Responsive Design",
          "Branding & Style Guides",
          "Accessibility",
          "A/B Testing",
        ],
      },
    },
    {
      id: 3,
      icon: "uil uil-edit",
      title: "Branding Designer",
      modal: {
        title: "Branding Designer",
        description:
          "I offer services with more than 2 years of experience with quality work to clients and companies",
        services: [
          "Competitive Analysis",
          "Accessibility Design",
          "Project Management",
          "Iteration and Refinement",
          "Presenting Designs",
          "User Research",
          "Surveys & Questionnaires",
        ],
      },
    },
  ];

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="services" className="section">
      <h2 className="section-title" data-heading="Services">
        What I Offer
      </h2>

      <div className="container mx-auto px-4">
        <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="services-content bg-box rounded p-6 relative"
            >
              <div className="mb-4">
                <i
                  className={`${service.icon} text-2xl text-skin block mb-4`}
                ></i>
                <h3 className="services-title text-lg font-medium">
                  {service.title}
                </h3>
              </div>

              <span
                className="services-button text-skin flex items-center cursor-pointer absolute bottom-6 left-6"
                onClick={() => openModal(service.id)}
              >
                View More
                <i className="uil uil-arrow-right ml-1 transition-transform group-hover:translate-x-1"></i>
              </span>

              {/* Modal */}
              {activeModal === service.id && (
                <div className="services-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="services-modal-content bg-box rounded-lg p-6 max-w-md w-full relative">
                    <i
                      className="uil uil-times services-modal-close absolute top-4 right-4 text-xl text-skin cursor-pointer"
                      onClick={closeModal}
                    ></i>

                    <h3 className="services-modal-title text-xl font-medium text-center mb-4">
                      {service.modal.title}
                    </h3>
                    <p className="services-modal-description text-sm text-center mb-6">
                      {service.modal.description}
                    </p>

                    <ul className="services-modal-services space-y-3">
                      {service.modal.services.map((item, index) => (
                        <li
                          key={index}
                          className="services-modal-service flex items-start"
                        >
                          <i className="uil uil-check-circle services-modal-icon text-skin text-lg mr-2 mt-0.5"></i>
                          <p className="services-modal-info text-sm">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
