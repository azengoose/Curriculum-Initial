import "./externalexamples.css";
import { Link as ReactLink } from "react-router-dom";
import { example_external_curriculums } from "./link_test_data";
import ExternalIcon from "../../data/images/external-link.svg";

import { Icon, HostLink } from "../../components/curriculums/LinkPreview";

export default function ExternalExamples() {
  return (
    <div id="external-examples-div">
      {example_external_curriculums.map((e, i) => {
        return (
          <div className="each-ext-cur-div" key={i}>
            <a
              className="ext-cur-title-link ext-cur-title"
              href={e.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {e.Title} &nbsp;
              <img
                style={{ height: 10 }}
                src={ExternalIcon}
                alt="external link"
              />
            </a>
            <ReactLink
              to={`/iters/${e.sortTitle}`}
              state={{ id: e.id }}
            >
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
                        <span className="subject-tag" key={i}>
                          {e}
                        </span>
                      );
                    })
                  : ""}
              </div>
            </ReactLink>
          </div>
        );
      })}
    </div>
  );
}
