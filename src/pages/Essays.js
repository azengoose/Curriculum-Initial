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
      <ReactMarkdown className={style.reactMarkDown} children={content} />

      <BtnHome />
    </>
  );
}
