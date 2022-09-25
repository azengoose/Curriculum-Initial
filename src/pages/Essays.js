// Essay page
// with imported text components from md

import { BtnHome } from "../components/Buttons";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

import style from "./text/markdown-styles.module.css";

export default function Essays() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("Essays.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
      <ReactMarkdown className={style.reactMarkDown}>
          {content}
      </ReactMarkdown>

      <BtnHome />
    </>
  );
}

// export default function Guidelines() {
//   return (
//     <>
//       <div className="centered-p">
//         <h2 className="theme-h2">The Elements of a Curriculum</h2>
//         <p>
//           Before you click away, the following proposed elements have been
//           grouped in one way to serve as an encompassing guideline for what a
//           fully-fleshed out curriculum would look like.
//         </p>
//         <p>
//           It isn't required or even usual for all elements to be incorporated
//           into a curriculum for it to be a good or popular curriculum.
//         </p>
//         <p>
//           If you are not involved in some standard body or institution in the
//           individual creation of a curriculum, I encourage you to be bold and be
//           selective about what to emphasise in your curriculum.
//         </p>
//         <h3 className="theme-h3">Description, Tagline, Authors</h3>
//         <p></p>
//         <h3 className="theme-h3">Duration, Pricing, Availability, Location</h3>
//         <p></p>
//         <h3 className="theme-h3">Vision, Objectives, Rationales</h3>
//         <p></p>
//         <h3 className="theme-h3">Steps, Progression</h3>
//         <p></p>
//         <h3 className="theme-h3">Resources, Content, Information</h3>
//         <p></p>
//         <h3 className="theme-h3">Learning Experience</h3>
//         <p></p>
//         <h3 className="theme-h3">Reviews, Evaluations, Tests</h3>
//         <p></p>
//         <h3 className="theme-h3">Similar Curriculums, Comparisons, Context</h3>
//         <p></p>
//       </div>
//     </>
//   );
// }
