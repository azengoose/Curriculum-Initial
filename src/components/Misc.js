// Miscellaneous exports

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  "Music",
  "Physics",
  // "Chemistry",
  "Psychology",
  "History",
  "Biology",
];
