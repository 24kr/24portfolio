import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // Handle scroll section active link
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(`.nav-menu a[href*=${sectionId}]`)
            ?.classList.add("text-skin");
          document
            .querySelector(`.nav-menu a[href*=${sectionId}]`)
            ?.classList.remove("text-title");
        } else {
          document
            .querySelector(`.nav-menu a[href*=${sectionId}]`)
            ?.classList.remove("text-skin");
          document
            .querySelector(`.nav-menu a[href*=${sectionId}]`)
            ?.classList.add("text-title");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className="ml-0 lg:ml-[100px]">
        <Home />
        <About />
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
