// Miscellaneous exports

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./misc.css";

// ScrollToTop.jsx
// https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/

export const ScrollToTop = (props) => {
  const location = useLocation();
  const children = props.children;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
};

// Loading Spinner
export function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}

// Subjects List for Filters and Categories
export const subjectList = [
  "Art",
  "Languages",
  "Math",
  "Computing",
  "Engineering",
  "Music",
  "Physics",
  "Chemistry",
  "Psychology",
  "History",
  "Biology",
  "Philosophy",
  "Society",
  "Economics",
  "Politics",
  "People",
  "Self",
  "Geography",
  "Earth Sciences",
];
export const optionList = [
  { value: "Art", label: "Art" },
  { value: "Languages", label: "Languages" },
  { value: "Math", label: "Math" },
  { value: "Computing", label: "Computing" },
  { value: "Engineering", label: "Engineering" },
  { value: "Music", label: "Music" },
  { value: "Physics", label: "Physics" },
  { value: "Chemistry", label: "Chemistry" },
  { value: "Psychology", label: "Psychology" },
  { value: "History", label: "History" },
  { value: "Biology", label: "Biology" },
  { value: "Philosophy", label: "Philosophy" },
  { value: "Society", label: "Society" },
  { value: "Economics", label: "Economics" },
  { value: "Politics", label: "Politics" },
  // { value: "People", label: "People" },
  { value: "Self", label: "Self" },
  { value: "Geography", label: "Geography" },
  { value: "Earth Sciences", label: "Earth Sciences" },
];

// Usage:   <Warning text= "hi there friend" />
export function Warning({ text }) {
  return (
    <div className="centered-p warning">
      <img
        className="warning-icon"
        src="https://cdn-icons-png.flaticon.com/512/5932/5932058.png"
      />
      {text}
    </div>
  );
}

export function Accordion({ title, panel, panel2 }) {
  function handleChange(e) {
    var acc = e.target;
    acc.classList.toggle("active");
    var panel = acc.nextElementSibling;
    panel.classList.toggle("panel-active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return (
    <>
      <button className="accordion" onClick={(e) => handleChange(e)}>
        {title}
      </button>
      <div className="panel">
        {panel}
        {panel2}
      </div>
    </>
  );
}
