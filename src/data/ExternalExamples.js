import "./externalexamples.css";
import { example_external_curriculums } from "./link_test_data";

export default function ExternalExamples() {
  return (
    <div id="external-examples-div">
      {example_external_curriculums.map((e, i) => {
        return (
          <>
            <div key={i}>
              <a target="_blank" rel="noopener noreferrer" href={e.Link}>
                {e.Title}
              </a>
              <p>
                Created by {e.Designer}
                {e.LastUpdate ? `: ${e.LastUpdate}` : ""}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}
