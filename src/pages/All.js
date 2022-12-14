import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link as ReactLink } from "react-router-dom";

import ExternalIcon from "../data/images/external-link.svg";
import { Icon, HostLink } from "../components/curriculums/LinkPreview";
import { QueryAllBySubject } from "../data/Query";
import { ArrowBtn } from "../components/buttons/Buttons";
//import CurriculumOutput from "../components/curriculums/CurriculumOutput";

export default function All() {
  const [curriculums, setCurriculums] = useState([]);

  QueryAllBySubject("external_curriculums", setCurriculums, curriculums)
  // console.log("curriculums: ", curriculums)

  return (
    <>
      <Helmet>
        <title>Iters | All</title>
      </Helmet>
      <div className="explore-curriculum">
        <h2 className="theme-h2" id="all-h2">
          All Curriculums
        </h2>
        <div style={{ marginTop: -30, marginBottom: 30 }}>
          Total Curriculums: {curriculums.length}
        </div>

        {/* <CurriculumOutput curriculums={curriculums}/> */}

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
        <div className="two-columns">
          <div className="marauto">
            <ArrowBtn link="/explore" text="Explore Filtered Curriculums" />
            <div style={{ marginLeft: 10, marginTop: 10 }}>
              Total Curriculums: {curriculums.length}
            </div>
          </div>
          <div className="marauto">
            <ArrowBtn link="/add" text="Add a Curriculum" />
            <ArrowBtn link="/info" text="Info on Curriculums" />
          </div>
        </div>
      </div>
    </>
  );
}
