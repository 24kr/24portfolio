import { useState } from "react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "web",
      title: "Web Design",
      image: "https://i.postimg.cc/43Th5VXJ/work-1.png",
      details: {
        title: "The services we provide for design",
        description:
          "Two smartphones displaying a sleek, dark-themed dashboard interface",
        created: "22 Apr 2025",
        technologies: "html css",
        role: "frontend",
        view: "#",
      },
    },
    {
      id: 2,
      category: "app",
      title: "App Design",
      image: "https://i.postimg.cc/sXLjnC5p/work-2.png",
      details: {
        title: "Mobile App Lanfing Design & App Maintain",
        description:
          "A stylish burger restaurant mobile app interface displayed on two smartphones",
        created: "15 Apr 2025",
        technologies: "html css",
        role: "frontend",
        view: "#",
      },
    },
    {
      id: 3,
      category: "design",
      title: "Brand Design",
      image: "https://i.postimg.cc/QNB1jXYZ/work-3.png",
      details: {
        title: "Logo Design Creativity & Application",
        description:
          "Three smartphone screens displaying a beautifully designed travel booking application interface",
        created: "10 Apr 2025",
        technologies: "html css",
        role: "frontend",
        view: "#",
      },
    },
    {
      id: 4,
      category: "app",
      title: "App Design",
      image: "https://i.postimg.cc/s2DGqyG8/work-4.png",
      details: {
        title: "Mobile App Landing Design & Services",
        description:
          "Modern workout website interface design featuring a bold and energetic visual layout",
        created: "4 Apr 2025",
        technologies: "html css",
        role: "frontend",
        view: "#",
      },
    },
    {
      id: 5,
      category: "web",
      title: "Brand Design",
      image: "https://i.postimg.cc/TYVyPhrF/work-5.png",
      details: {
        title: "Design for Technology & Services",
        description:
          "An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases",
        created: "28 Mar 2025",
        technologies: "html css",
        role: "frontend",
        view: "#",
      },
    },
    {
      id: 6,
      category: "design",
      title: "Web Design",
      image: "https://i.postimg.cc/wMdqKcbv/work-6.png",
      details: {
        title: "App for Technology & Services",
        description:
          "An app design that is clean and modern, making food browsing and ordering easy",
        created: "20 Mar 2025",
        technologies: "html css",
        role: "frontend",
        view: "#",
      },
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "app", label: "App" },
    { id: "design", label: "Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="section">
      <h2 className="section-title" data-heading="My Portfolio">
        Recent Works
      </h2>

      <div className="container mx-auto px-4">
        <div className="work-filters flex justify-center flex-wrap gap-4 mb-8">
          {filters.map((filter) => (
            <span
              key={filter.id}
              className={`work-item px-4 py-1 rounded-full cursor-pointer transition-colors ${
                activeFilter === filter.id
                  ? "bg-skin text-title"
                  : "text-title hover:text-skin"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </span>
          ))}
        </div>

        <div className="work-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="work-card bg-box rounded-lg p-4">
              <img
                src={project.image}
                alt={project.title}
                className="work-img rounded-lg mb-4"
              />
              <h3 className="work-title text-lg font-medium mb-2">
                {project.title}
              </h3>
              <span
                className="work-button text-skin flex items-center cursor-pointer"
                onClick={() => openProjectDetails(project)}
              >
                Demo
                <i className="uil uil-arrow-right ml-1 transition-transform hover:translate-x-1"></i>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Popup */}
      {selectedProject && (
        <div className="portfolio-popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="portfolio-popup-inner bg-box rounded-lg p-6 max-w-4xl w-full relative">
            <div className="portfolio-popup-content grid grid-cols-1 lg:grid-cols-2 gap-6">
              <span
                className="portfolio-popup-close absolute top-4 right-4 text-2xl text-skin cursor-pointer"
                onClick={closeProjectDetails}
              >
                <i className="uil uil-times"></i>
              </span>

              <div className="pp-thumbnail">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="portfolio-popup-img rounded-lg"
                />
              </div>

              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle mb-2">
                  Featured - <span>{selectedProject.category}</span>
                </div>

                <div className="portfolio-popup-body">
                  <h3 className="details-title text-xl font-bold mb-4">
                    {selectedProject.details.title}
                  </h3>
                  <p className="details-description mb-6">
                    {selectedProject.details.description}
                  </p>

                  <ul className="details-info space-y-2">
                    <li>
                      Created - <span>{selectedProject.details.created}</span>
                    </li>
                    <li>
                      Technologies -{" "}
                      <span>{selectedProject.details.technologies}</span>
                    </li>
                    <li>
                      Role - <span>{selectedProject.details.role}</span>
                    </li>
                    <li>
                      View -{" "}
                      <span>
                        <a
                          href={selectedProject.details.view}
                          className="text-skin"
                        >
                          www.domain.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
