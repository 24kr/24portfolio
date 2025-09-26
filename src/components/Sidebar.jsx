const Sidebar = ({ showSidebar, setShowSidebar, activeSection }) => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 w-full h-screen bg-body border-r border-box z-40 transform transition-transform duration-300 lg:w-[100px] ${showSidebar ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        id="sidebar"
      >
        <nav className="nav relative h-full py-8">
          {/* Logo - Hidden on mobile */}
          <div className="nav-logo absolute top-8 left-0 right-0 w-10 h-10 bg-skin rounded-full flex items-center justify-center mx-auto hidden lg:flex">
            <a href="#home" className="nav-logo-text text-lg font-bold text-title">
              24
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="nav-menu h-full flex items-center justify-center lg:block">
            <div className="menu h-full lg:transform lg:rotate-[-90deg] lg:translate-y-[-100%] lg:origin-left-top lg:w-screen">
              <ul className="nav-list flex flex-col lg:flex-row-reverse items-center lg:space-x-8 lg:space-x-reverse h-full justify-center lg:justify-start">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={index} className="nav-item my-4 lg:my-0">
                      <a
                        href={item.href}
                        className={`nav-link font-medium transition-colors duration-300 relative block py-2 px-4 lg:py-8 ${isActive ? 'active-link text-skin' : 'text-title hover:text-skin'
                          }`}
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Share Button - Hidden on mobile */}
          <div className="btn-share absolute bottom-8 left-0 right-0 text-center cursor-pointer hidden lg:block">
            <i className="uil uil-share-alt social-share text-2xl text-title"></i>
          </div>

          {/* Close Button - Mobile only */}
          <div
            className="nav-close absolute top-6 right-6 text-2xl cursor-pointer text-title lg:hidden"
            onClick={() => setShowSidebar(false)}
          >
            <i className="uil uil-times"></i>
          </div>
        </nav>
      </aside>

      {/* Overlay - Mobile only */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;