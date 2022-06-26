import { useState } from "react";
import DevApi from "./components/DevApi";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Prodcuts from "./components/Prodcuts";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Prodcuts />
      <DevApi />
    </div>
  );
}

export default App;
