import "./externalexamples.css";
import { example_external_curriculums } from "./link_test_data";

import { Icon, HostLink } from "../../components/curriculums/LinkPreview";

export default function ExternalExamples() {
  return (
    <div id="external-examples-div">
      {example_external_curriculums.map((e, i) => {
        return (
          <a href={e.Link} target="_blank" rel="noopener noreferrer" key={i}>
            <div className="each-ext-cur-div">
              <p className="ext-cur-title">{e.Title}</p>
              <div className="ext-cur-summary">
                <p>
                  <span>
                    {e.LastUpdated} | {HostLink(e.Link)} {Icon(e.Link)}
                  </span>
                </p>
                <p>{e.Authors}</p>
              </div>
              <div className="subject-tag-div">
                {e.Subjects
                  ? e.Subjects.map((e, i) => {
                      return (
                        <span className={`${e} subject-tag`} key={i}>
                          {e}
                        </span>
                      );
                    })
                  : ""}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
