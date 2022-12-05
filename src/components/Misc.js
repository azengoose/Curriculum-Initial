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
  "Culture",
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
  { value: "Culture", label: "Culture" },
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

// For time related exports
// serverTimeStamp() is a Firebase function

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const d = new Date();

var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();

export const dateMonthYear = date + " " + month + " " + year;
export const monthYear = month + " " + year;
