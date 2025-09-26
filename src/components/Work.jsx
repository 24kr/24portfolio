import { useState, useEffect } from "react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1, category: "web", title: "Web Design", image: "https://i.postimg.cc/43Th5VXJ/work-1.png",
      details: { title: "The services we provide for design", description: "Two smartphones displaying a sleek, dark-themed dashboard interface", created: "22 Apr 2025", technologies: "html css", role: "frontend", view: "#" }
    },
    {
      id: 2, category: "app", title: "App Design", image: "https://i.postimg.cc/sXLjnC5p/work-2.png",
      details: { title: "Mobile App Landing Design & App Maintain", description: "A stylish burger restaurant mobile app interface displayed on two smartphones", created: "15 Apr 2025", technologies: "html css", role: "frontend", view: "#" }
    },
    {
      id: 3, category: "design", title: "Brand Design", image: "https://i.postimg.cc/QNB1jXYZ/work-3.png",
      details: { title: "Logo Design Creativity & Application", description: "Three smartphone screens displaying a beautifully designed travel booking application interface", created: "10 Apr 2025", technologies: "html css", role: "frontend", view: "#" }
    },
    {
      id: 4, category: "app", title: "App Design", image: "https://i.postimg.cc/s2DGqyG8/work-4.png",
      details: { title: "Mobile App Landing Design & Services", description: "Modern workout website interface design featuring a bold and energetic visual layout", created: "4 Apr 2025", technologies: "html css", role: "frontend", view: "#" }
    },
    {
      id: 5, category: "web", title: "Brand Design", image: "https://i.postimg.cc/TYVyPhrF/work-5.png",
      details: { title: "Design for Technology & Services", description: "An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases", created: "28 Mar 2025", technologies: "html css", role: "frontend", view: "#" }
    },
    {
      id: 6, category: "design", title: "Web Design", image: "https://i.postimg.cc/wMdqKcbv/work-6.png",
      details: { title: "App for Technology & Services", description: "An app design that is clean and modern, making food browsing and ordering easy", created: "20 Mar 2025", technologies: "html css", role: "frontend", view: "#" }
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "app", label: "App" },
    { id: "design", label: "Design" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scroll
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) closeProjectDetails();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

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
              className={`work-item px-6 py-2 rounded-full cursor-pointer transition-all duration-300 font-medium ${activeFilter === filter.id
                  ? "bg-skin text-title"
                  : "text-title hover:bg-skin hover:text-title"
                }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </span>
          ))}
        </div>

        <div className="work-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="work-card bg-box rounded-lg p-4 transition-transform duration-300 hover:transform hover:scale-105">
              <img src={project.image} alt={project.title} className="work-img rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="work-title text-lg font-medium mb-2">{project.title}</h3>
              <span className="work-button text-skin flex items-center cursor-pointer group" onClick={() => openProjectDetails(project)}>
                Demo
                <i className="uil uil-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Popup */}
      {selectedProject && (
        <div className="portfolio-popup fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="portfolio-popup-inner bg-box rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn">
            <span className="portfolio-popup-close absolute top-4 right-4 text-2xl text-skin cursor-pointer z-10 hover:text-title transition-colors" onClick={closeProjectDetails}>
              <i className="uil uil-times"></i>
            </span>

            <div className="portfolio-popup-content grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div className="pp-thumbnail">
                <img src={selectedProject.image} alt={selectedProject.title} className="portfolio-popup-img rounded-lg w-full" />
              </div>

              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle text-sm mb-4">
                  Featured - <span className="text-skin capitalize">{selectedProject.category}</span>
                </div>

                <div className="portfolio-popup-body">
                  <h3 className="details-title text-xl font-bold mb-4 text-title">{selectedProject.details.title}</h3>
                  <p className="details-description mb-6">{selectedProject.details.description}</p>

                  <ul className="details-info space-y-3">
                    <li className="flex">
                      <span className="font-medium min-w-[80px]">Created -</span>
                      <span>{selectedProject.details.created}</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium min-w-[80px]">Technologies -</span>
                      <span>{selectedProject.details.technologies}</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium min-w-[80px]">Role -</span>
                      <span className="capitalize">{selectedProject.details.role}</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium min-w-[80px]">View -</span>
                      <span>
                        <a href={selectedProject.details.view} className="text-skin hover:underline">www.domain.com</a>
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