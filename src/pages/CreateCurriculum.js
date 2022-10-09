// For creating internally completed curriculums

//import { useState } from "react";
// import db from "../data/config.js";
// import { BtnHome, BtnExplore, BtnAddCurriculum } from "../components/Buttons";
import { TextCreateCurriculum } from "../text/Text";

export default function CreateCurriculum() {
  return (
    <>
      <h2 className="theme-h2">Create Curriculum</h2>
      <div className="centered-p">
        <TextCreateCurriculum />
      </div>
      <div className="centered-p">
        The only reason this page exists is to hint at the possibility of what
        could be.
      </div>

      <h3 className="theme-h3">Curriculum Examples</h3>

      {/* <BtnHome />
      <BtnExplore />
      <BtnAddCurriculum /> */}
    </>
  );
}
