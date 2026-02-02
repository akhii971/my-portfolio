import { BrowserRouter } from "react-router-dom";
import { Hero, About, TechStack, Experience, Projects, Contact } from "./sections";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingLinesBackground from "./components/FloatingLinesBackground";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-transparent text-white overflow-hidden">
        <Navbar />
        <FloatingLinesBackground
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
