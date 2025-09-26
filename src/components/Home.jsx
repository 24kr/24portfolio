const Home = () => {
  const contactInfo = [
    { icon: "uil uil-facebook-messenger", title: "Messenger", subtitle: "user.fb123" },
    { icon: "uil uil-whatsapp", title: "Whatsapp", subtitle: "999-888-777" },
    { icon: "uil uil-envelope-edit", title: "Email", subtitle: "user@gmail.com" }
  ];

  return (
    <section id="home" className="home min-h-screen relative">
      <div
        className="home-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.postimg.cc/DZxD1xGL/home-bg.jpg')" }}
      ></div>

      <div className="home-container container h-full relative z-10 py-16">
        {/* Social Links */}
        <div className="home-social absolute top-8 left-0 flex items-center gap-14">
          <span className="home-social-follow text-sm font-medium text-title relative">
            Follow Me
            <span className="absolute w-4 h-0.5 bg-text -right-7 top-1/2 transform -translate-y-1/2"></span>
          </span>
          <div className="home-social-links flex gap-4">
            <a href="https://www.facebook.com" target="_blank" className="home-social-link text-text hover:translate-y-0.5 transition-transform">
              <i className="uil uil-facebook-f text-lg"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" className="home-social-link text-text hover:translate-y-0.5 transition-transform">
              <i className="uil uil-instagram text-lg"></i>
            </a>
            <a href="https://www.x.com" target="_blank" className="home-social-link text-text hover:translate-y-0.5 transition-transform">
              <i className="uil uil-twitter text-lg"></i>
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Image - SHOWN ON DESKTOP, HIDDEN ON MOBILE */}
          <div className="home-img flex justify-center order-1 lg:order-2">
            <img
              src="https://i.postimg.cc/65x2tR6g/nme.png"
              alt="Eric"
              className="w-64 lg:w-80 max-w-full lg:block hidden"
            />
          </div>

          {/* Text Content */}
          <div className="home-data order-2 lg:order-1 text-center lg:text-left">
            <h1 className="home-title text-4xl lg:text-5xl font-bold text-title mb-4">
              Hi, I'm Eric
            </h1>
            <h3 className="home-subtitle text-xl lg:text-2xl font-medium text-title mb-6">
              Software Engineer
            </h3>
            <p className="home-description text-text mb-8 max-w-md mx-auto lg:mx-0">
              I have Top level experience in software Development, skills and producing quality work
            </p>
            <a href="#about" className="button inline-flex">
              <i className="uil uil-user button-icon mr-2"></i>
              More About me!
            </a>
          </div>
        </div>

        {/* Contact Info - Hidden on mobile, shown on desktop */}
        <div className="my-info absolute bottom-8 left-0 hidden lg:flex gap-7">
          {contactInfo.map((info, index) => (
            <div key={index} className="info-item flex items-center">
              <i className={`${info.icon} info-icon text-2xl text-skin mr-3`}></i>
              <div>
                <h3 className="info-title text-sm font-medium text-title">{info.title}</h3>
                <span className="info-subtitle text-sm text-text">{info.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;