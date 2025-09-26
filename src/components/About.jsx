const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title" data-heading="My Intro">
        About me
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/W1YZxTpJ/about-img.jpg"
            alt="About"
            className="rounded-lg w-full max-w-md"
          />
        </div>

        <div className="about-data text-center lg:text-left">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">
            Hi, I'm Mariam Wallas, based in Rwanda
          </h3>
          <p className="text-text mb-8 text-justify lg:text-left">
            I'm a web developer, with extensive knowledge and years of
            experience, working with quality work in web technologies, UI and UX
            design
          </p>

          <div className="grid grid-cols-3 gap-2 mb-10">
            <div className="bg-box rounded p-4 text-center">
              <i className="uil uil-award text-2xl text-skin mb-2"></i>
              <h3 className="text-sm font-medium">Experience</h3>
              <span className="text-sm">10 + Years</span>
            </div>

            <div className="bg-box rounded p-4 text-center">
              <i className="uil uil-suitcase-alt text-2xl text-skin mb-2"></i>
              <h3 className="text-sm font-medium">Completed</h3>
              <span className="text-sm">60 + Projects</span>
            </div>

            <div className="bg-box rounded p-4 text-center">
              <i className="uil uil-headphones-alt text-2xl text-skin mb-2"></i>
              <h3 className="text-sm font-medium">Support</h3>
              <span className="text-sm">Online 24/7</span>
            </div>
          </div>

          <a href="#contact" className="button inline-flex items-center">
            <i className="uil uil-navigator"></i>
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
