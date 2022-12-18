// Only for use when > 1 curriculums required to be mapped

import { Link as ReactLink } from "react-router-dom";

import ExternalIcon from "../../data/images/external-link.svg";
import { Icon, HostLink } from "./LinkPreview";

export default function CurriculumOutput(curriculums) {

  return (
    <>
          {curriculums.map(
            (
              { Title, Link, LastUpdated, Authors, Subjects, sortTitle },
              i
            ) => {
              return (
                <div className="each-ext-cur-div" key={i}>
                  <a
                    className="ext-cur-title-link ext-cur-title"
                    href={Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Title} &nbsp;
                    <img
                      style={{ height: 10 }}
                      src={ExternalIcon}
                      alt="external link"
                    />
                  </a>
                  <ReactLink
                    to={`/iters/${sortTitle}`}
                    state={{ id: curriculums[i].id }}
                  >
                    <div className="ext-cur-summary">
                      <p>
                        <span>
                          {LastUpdated} | {HostLink(Link)} {Icon(Link)}
                        </span>
                      </p>
                      <p>{Authors}</p>
                    </div>
                    <div className="subject-tag-div">
                      {Subjects
                        ? Subjects.map((e, i) => {
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
            }
          )}

    </>
  );
}
