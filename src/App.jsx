import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Chapters from "./components/Chapters/Chapters";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Chapters />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}