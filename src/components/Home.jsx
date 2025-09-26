const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/DZxD1xGL/home-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4 h-full grid items-center relative">
        <div className="home-social absolute top-7 left-0 flex items-center space-x-14">
          <span className="text-sm font-medium text-title relative">
            Follow Me
            <span className="absolute w-4 h-0.5 bg-text right-[-45%] top-1/2 transform -translate-y-1/2"></span>
          </span>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-text hover:translate-y-1 transition-transform duration-300"
            >
              <i className="uil uil-facebook-f text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-text hover:translate-y-1 transition-transform duration-300"
            >
              <i className="uil uil-instagram text-lg"></i>
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              className="text-text hover:translate-y-1 transition-transform duration-300"
            >
              <i className="uil uil-twitter text-lg"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-title mb-4">
              Hi, I'm Eric
            </h1>
            <h3 className="text-xl lg:text-2xl font-medium text-title mb-6">
              Software Engineer
            </h3>
            <p className="text-text mb-8 max-w-md mx-auto lg:mx-0">
              I have Top level experience in software Development, skills and
              producing quality work
            </p>
            <a
              href="#about"
              className="button bg-skin text-title px-6 py-3 rounded inline-flex items-center font-medium relative overflow-hidden group"
            >
              <i className="uil uil-user mr-2"></i>
              More About me!
              <span className="absolute inset-0 bg-mirage transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></span>
            </a>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <img
              // src="https://i.postimg.cc/65x2tR6g/nme.png"
              alt="Profile"
              className="w-64 lg:w-80"
            />
          </div>
        </div>

        <div className="absolute left-0 bottom-7 hidden lg:flex space-x-7">
          <div className="flex items-center">
            <i className="uil uil-facebook-messenger text-2xl text-skin mr-3"></i>
            <div>
              <h3 className="text-sm font-medium text-title">Messenger</h3>
              <span className="text-sm text-text">user.fb123</span>
            </div>
          </div>
          <div className="flex items-center">
            <i className="uil uil-whatsapp text-2xl text-skin mr-3"></i>
            <div>
              <h3 className="text-sm font-medium text-title">Whatsapp</h3>
              <span className="text-sm text-text">999-888-777</span>
            </div>
          </div>
          <div className="flex items-center">
            <i className="uil uil-envelope-edit text-2xl text-skin mr-3"></i>
            <div>
              <h3 className="text-sm font-medium text-title">Email</h3>
              <span className="text-sm text-text">user@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
