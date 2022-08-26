// Dev Plan-Log
// AUTH - done, add styling
// STORAGE - in progress
// LINKS - dynamic links per curriculum resource

// Separation of Projects:
// RESOURCES: Source data of resources, eg. from ClassCentral
// CURRICULUMS: Source data of curriculums
// ITERXUE: Combine these projects into one website.
// VISUALISATIONS: Additional creative research project

import "./styles.css";
import Paths from "./router.js";
import Navbar from "./pages/components/Navbar.js";
import Footer from "./pages/components/Footer.js";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Paths />
      </div>
      <Footer />
    </>
  );
}

// Not Working: opens external links in new tab
// var all_links = document.querySelectorAll("a");
// for (var i = 0; i < all_links.length; i++) {
//   var a = all_links[i];
//   if (a.hostname !== location.hostname) {
//     a.rel = "noopener";
//     a.target = "_blank";
//   }
// }
