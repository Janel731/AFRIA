import { useRef, useState } from "react";
import Preloader from "./components/Preloader";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Symboles from "./components/Symboles";
import Signification from "./components/Signification";
import Createur from "./components/Createur";
import Tutoriels from "./components/Tutoriels";
import Precommande from "./components/Precommande";
import Footer from "./components/Footer";

const App = () => {
  const navLogoRef = useRef(null);
const [loading, setLoading] = useState(true);
  return (
     <>
      <Navbar />
      <Hero loading={loading} />
      <Preloader onFinish={() => setLoading(false)} />
      <Mission />
      <Symboles />
      <Signification />
      <Createur />
      <Tutoriels></Tutoriels>
      <Precommande />
      <Footer />
    </>
  );
};

export default App;
