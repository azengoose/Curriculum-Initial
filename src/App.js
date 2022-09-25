// Separation of Projects:
// RESOURCES: Source data of resources, eg. from ClassCentral
// ITERXUE: Combine external and internal curriculums into one website.

import "./styles.css";
import Paths from "./router.js";
import Navbar from "./components/nav/Navbar.js";
import Footer from "./components/nav/Footer.js";

export default function App() {
  return (
    <>
      <Navbar />
      <Paths />
      <Footer />
    </>
  );
}
