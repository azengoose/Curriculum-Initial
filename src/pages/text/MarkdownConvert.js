// Currently doesn't seem to want to be working

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

import style from "./markdown-styles.module.css";

export function About() {
  const [about, setAbout] = useState("");
  useEffect(() => {
    fetch("About.md")
      .then((res) => res.text())
      .then((text) => setAbout(text));
  }, []);
  return (
    <>
      <h2 className="theme-h2">About</h2>
      <ReactMarkdown className={style.reactMarkDown} children={about} />
    </>
  );
}

export function Guidelines() {
  const [guide, setGuide] = useState("");
  useEffect(() => {
    fetch("Guidelines.md")
      .then((res) => res.text())
      .then((text) => setGuide(text));
  }, []);
  return (
    <>
      <h2 className="theme-h2">Elements of a Curriculum</h2>
      <ReactMarkdown className={style.reactMarkDown} children={guide} />
    </>
  );
}
