import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Qualification from "./components/Qualification"; // NEW COMPONENT
import Skills from "./components/Skills";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when clicking anywhere outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showSidebar && window.innerWidth < 1024) {
        if (!e.target.closest('.sidebar') && !e.target.closest('.nav-toggle')) {
          setShowSidebar(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showSidebar]);

  return (
    <div className="App relative">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        activeSection={activeSection}
      />

      {/* Mobile toggle button */}
      <div
        className="nav-toggle lg:hidden fixed top-8 right-6 w-9 h-8 bg-skin text-title rounded flex items-center justify-center cursor-pointer z-50"
        onClick={() => setShowSidebar(true)}
      >
        <i className="uil uil-bars text-lg"></i>
      </div>

      <main className="ml-0 lg:ml-[100px] transition-all duration-300">
        <Home />
        <About />
        <Qualification /> {/* NEW SECTION */}
        <Skills />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;