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
    { id: "frontend", title: "Frontend Developer", subtitle: "More than 4 years", icon: "uil uil-brackets-curly" },
    { id: "design", title: "UI / UX Design", subtitle: "More than 5 years", icon: "uil uil-swatchbook" },
    { id: "backend", title: "Backend Developer", subtitle: "More than 2 years", icon: "uil uil-server-network" },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title" data-heading="My Abilities">
        My Experience
      </h2>

      <div className="skills-container container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="skills-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`skills-header flex items-center justify-between p-6 cursor-pointer transition-all duration-300 ${activeTab === tab.id ? 'skills-active bg-box rounded-lg' : 'hover:bg-box hover:rounded-lg'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center">
                <i className={`${tab.icon} skills-icon text-2xl text-skin mr-4`}></i>
                <div>
                  <h3 className="skills-title text-lg font-bold">{tab.title}</h3>
                  <span className="skills-subtitle text-sm">{tab.subtitle}</span>
                </div>
              </div>
              <i
                className={`uil uil-angle-down skills-arrow text-2xl text-skin transition-transform duration-300 ${activeTab === tab.id ? 'rotate-[-90deg]' : ''
                  }`}
              ></i>
            </div>
          ))}
        </div>

        <div className="skills-content">
          {Object.keys(skillsData).map((tabId) => (
            <div
              key={tabId}
              className={`skills-group transition-all duration-300 ${activeTab === tabId ? 'block' : 'hidden'
                }`}
            >
              <div className="skills-list grid gap-6">
                {skillsData[tabId].map((skill, index) => (
                  <div key={index} className="skills-data">
                    <div className="skills-titles flex justify-between items-center mb-3">
                      <h3 className="skills-name font-medium">{skill.name}</h3>
                      <span className="skills-number">{skill.percentage}%</span>
                    </div>
                    <div className="skills-bar h-2 bg-box rounded-full overflow-hidden">
                      <span
                        className="skills-percentage h-full bg-skin rounded-full block transition-all duration-500"
                        style={{ width: `${skill.percentage}%` }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;