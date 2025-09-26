const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div
        className={`fixed top-2 right-4 w-9 h-8 bg-skin text-title rounded flex items-center justify-center cursor-pointer z-50 lg:hidden`}
        onClick={() => setShowSidebar(true)}
      >
        <i className="uil uil-bars"></i>
      </div>

      <aside
        className={`fixed top-0 left-0 w-full h-screen bg-body border-r border-box z-40 transform transition-transform duration-300 lg:w-[100px] lg:translate-x-0 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="relative h-full">
          <div className="absolute top-5 left-0 right-0 w-12 h-12 bg-skin rounded-full text-center mx-auto lg:block hidden">
            <a href="#" className="text-lg font-bold text-title leading-10">
              NME
            </a>
          </div>

          <div className="h-full flex items-center justify-center lg:fixed lg:rotate-[-90deg] lg:origin-left-top lg:w-screen lg:top-1/2">
            <ul className="flex flex-col lg:flex-row-reverse lg:items-center lg:space-y-0 lg:space-x-reverse lg:space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="my-4 lg:my-0">
                  <a
                    href={item.href}
                    className="text-title hover:text-skin transition-colors duration-300 relative font-medium px-4 py-2 block lg:py-8"
                    onClick={() => setShowSidebar(false)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-skin rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block absolute bottom-7 left-0 right-0 text-center cursor-pointer">
            <i className="uil uil-share-alt text-2xl text-title"></i>
          </div>

          <div
            className="absolute top-4 right-4 text-2xl cursor-pointer lg:hidden"
            onClick={() => setShowSidebar(false)}
          >
            <i className="uil uil-times text-title"></i>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
