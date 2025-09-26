import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 80 },
      { name: "Javascript", percentage: 60 },
      { name: "React", percentage: 85 },
    ],
    design: [
      { name: "Figma", percentage: 90 },
      { name: "Sketch", percentage: 80 },
      { name: "PhotoShop", percentage: 70 },
    ],
    backend: [
      { name: "PHP", percentage: 80 },
      { name: "Python", percentage: 80 },
      { name: "MySQL", percentage: 70 },
      { name: "Firebase", percentage: 75 },
    ],
  };

  const tabs = [
    {
      id: "frontend",
      title: "Frontend Developer",
      subtitle: "More than 4 years",
      icon: "uil uil-brackets-curly",
    },
    {
      id: "design",
      title: "UI / UX Design",
      subtitle: "More than 5 years",
      icon: "uil uil-swatchbook",
    },
    {
      id: "backend",
      title: "Backend Developer",
      subtitle: "More than 2 years",
      icon: "uil uil-server-network",
    },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title" data-heading="My Abilities">
        My Experience
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="skills-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`skills-header flex items-center p-4 cursor-pointer mb-6 ${
                activeTab === tab.id ? "skills-active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`${tab.icon} text-2xl text-skin mr-3`}></i>
              <div className="flex-1">
                <h1 className="text-lg font-bold">{tab.title}</h1>
                <span className="text-sm">{tab.subtitle}</span>
              </div>
              <i
                className={`uil uil-angle-down text-2xl text-skin ${
                  activeTab === tab.id ? "rotate-[-90deg]" : ""
                } transition-transform`}
              ></i>
            </div>
          ))}
        </div>

        <div className="skills-content">
          <div
            className={`skills-group ${
              activeTab === "frontend" ? "block" : "hidden"
            }`}
          >
            <div className="grid gap-6">
              {skillsData.frontend.map((skill, index) => (
                <div key={index} className="skills-data">
                  <div className="skills-titles flex justify-between mb-2">
                    <h3 className="skills-name font-medium">{skill.name}</h3>
                    <span className="skills-number">{skill.percentage}%</span>
                  </div>
                  <div className="skills-bar h-1 bg-box rounded">
                    <span
                      className="skills-percentage h-1 bg-skin rounded block"
                      style={{ width: `${skill.percentage}%` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`skills-group ${
              activeTab === "design" ? "block" : "hidden"
            }`}
          >
            <div className="grid gap-6">
              {skillsData.design.map((skill, index) => (
                <div key={index} className="skills-data">
                  <div className="skills-titles flex justify-between mb-2">
                    <h3 className="skills-name font-medium">{skill.name}</h3>
                    <span className="skills-number">{skill.percentage}%</span>
                  </div>
                  <div className="skills-bar h-1 bg-box rounded">
                    <span
                      className="skills-percentage h-1 bg-skin rounded block"
                      style={{ width: `${skill.percentage}%` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`skills-group ${
              activeTab === "backend" ? "block" : "hidden"
            }`}
          >
            <div className="grid gap-6">
              {skillsData.backend.map((skill, index) => (
                <div key={index} className="skills-data">
                  <div className="skills-titles flex justify-between mb-2">
                    <h3 className="skills-name font-medium">{skill.name}</h3>
                    <span className="skills-number">{skill.percentage}%</span>
                  </div>
                  <div className="skills-bar h-1 bg-box rounded">
                    <span
                      className="skills-percentage h-1 bg-skin rounded block"
                      style={{ width: `${skill.percentage}%` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
