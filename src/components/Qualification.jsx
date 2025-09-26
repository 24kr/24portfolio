const Qualification = () => {
    const education = [
        {
            title: "XYZ University (Sometown, NJ)",
            degree: "BFA in Graphic Design",
            period: "2011 - 2013"
        },
        {
            title: "ABC University (Sometown, NJ)",
            degree: "Diploma in Web Design",
            period: "2013 - 2015"
        },
        {
            title: "KLM University (Sometown, NJ)",
            degree: "BS in Web Development",
            period: "2015 - 2017"
        }
    ];

    const experience = [
        {
            title: "Copalopa Inc. (Sometown, NJ)",
            position: "Lead / Senior UX Designer",
            period: "2018 - Present"
        },
        {
            title: "Gabogle Inc. (Sometown, NJ)",
            position: "Web site / UX Designer",
            period: "2015 - 2018"
        },
        {
            title: "Copalopa Inc. (Sometown, NJ)",
            position: "Junior UX Designer",
            period: "2013 - 2015"
        }
    ];

    return (
        <section className="qualification section">
            <h2 className="section-title" data-heading="My Journey">
                Qualifications
            </h2>

            <div className="qualification-container container grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
                {/* Education */}
                <div className="education">
                    <h3 className="qualification-title text-xl font-medium mb-8 flex items-center">
                        <i className="uil uil-graduation-cap text-skin mr-2"></i>
                        Education
                    </h3>

                    <div className="timeline">
                        {education.map((item, index) => (
                            <div key={index} className="timeline-item relative mb-10 pl-12">
                                <div className="circle-dot absolute left-0 top-0 w-4 h-4 border-2 border-skin bg-skin rounded-full transition-colors duration-300 z-10"></div>
                                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-skin -z-10"></div>

                                <h3 className="timeline-title text-lg font-medium mb-1">{item.title}</h3>
                                <p className="timeline-text text-sm mb-2">{item.degree}</p>
                                <span className="timeline-date text-skin flex items-center text-sm">
                                    <i className="uil uil-calendar-alt mr-1"></i>
                                    {item.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div className="experience">
                    <h3 className="qualification-title text-xl font-medium mb-8 flex items-center">
                        <i className="uil uil-suitcase text-skin mr-2"></i>
                        Experience
                    </h3>

                    <div className="timeline">
                        {experience.map((item, index) => (
                            <div key={index} className="timeline-item relative mb-10 pl-12">
                                <div className="circle-dot absolute left-0 top-0 w-4 h-4 border-2 border-skin bg-skin rounded-full transition-colors duration-300 z-10"></div>
                                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-skin -z-10"></div>

                                <h3 className="timeline-title text-lg font-medium mb-1">{item.title}</h3>
                                <p className="timeline-text text-sm mb-2">{item.position}</p>
                                <span className="timeline-date text-skin flex items-center text-sm">
                                    <i className="uil uil-calendar-alt mr-1"></i>
                                    {item.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;