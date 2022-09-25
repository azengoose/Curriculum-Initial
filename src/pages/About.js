// About page
// with imported text components from md

import { BtnHome } from "../components/Buttons";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

import style from "./text/markdown-styles.module.css";

export default function About() {
  const [content, setContent] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    fetch("Essays.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  useEffect(() => {
    fetch("About.md")
      .then((res) => res.text())
      .then((text) => setAbout(text));
  }, []);

  return (
    <>
      <h2 className="theme-h2">About</h2>

      <ReactMarkdown className={style.reactMarkDown} children={about} />

      <ReactMarkdown className={style.reactMarkDown} children={content} />

      <BtnHome />
    </>
  );
}
