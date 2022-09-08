// About page
//  with imported text components

import { TextAbout } from "./text/Text";
import { BtnHome } from "./components/Buttons";

import { Essays } from "./text/Essays";

export default function About() {
  return (
    <>
      <h2 className="theme-h2">About</h2>
      <TextAbout />

      <Essays />

      <BtnHome />
    </>
  );
}
