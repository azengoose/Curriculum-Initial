import "./home.css";
import { subjectList } from "../Misc";

export default function HomeCategory() {
  return (
    <>
      <div>
        <p>Take me to: </p>A cover-up black div, with categories on the outset.
        {subjectList.map((e, i) => {
          return (
            <div key={i}>
              <p>{e}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
