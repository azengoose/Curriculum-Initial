import { Link as ReactLink } from "react-router-dom";

import ExternalIcon from "../../data/images/external-link.svg";
import { Icon, HostLink } from "./LinkPreview";

export default function CurriculumOutput(curriculums) {
    console.log("curriculums: ", curriculums)

  return (
    <>
        <div className="data-ouput">
          <div className="external-curriculums-wrapper">
            {curriculums.map(({ Data, id }, index) => {
              return (
                <div key={index}>
                  {Data.map(
                    ({ Title, Link, LastUpdated, Authors, Subjects, sortTitle }, i) => {
                      return (
                        <ReactLink
                        to={`/iters/${sortTitle}`}
                        key={i}
                        state={{ id: id }}
                      >
                          <div className="each-ext-cur-div">
                          <div className="ext-cur-title">
                            {/* The link in a link does not work */}
                            <a
                              className="ext-cur-title-link"
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
                          </div>
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
                          </div>
                        </ReactLink>
                      );
                    }
                  )}
                </div>
              );
            })}
          </div>
        </div>
    </>
  );
}
