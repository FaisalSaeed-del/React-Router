import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "../src/pages/about/About";
import Contact from "../src/pages/contact/Contact";
import Gallery from "../src/pages/gallery/Gallery";
import Home from "../src/pages/home/Home";
import NotFound from "../src/pages/notFound/NotFound";
import Plans from "../src/pages/plans/Plans";
import Trainers from "../src/pages/trainers/Trainers";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </BrowserRouter>
  );
}

export default App;
