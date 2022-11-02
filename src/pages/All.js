// Admin page that displays all pending curriculums like the explore page
//  but also includes an accept button for each curriculum that
//  copies the data from the submitted_curriculums and pastes it onto
//  the the external_curriculums database collection.

import { useState } from "react";
import { Icon, HostLink } from "../components/curriculums/LinkPreview";
import { QueryAllBySubject } from "../data/Query";
import { ArrowBtn } from "../components/Buttons";

export default function All() {
  const [curriculums, setCurriculums] = useState([]);

  QueryAllBySubject("external_curriculums", setCurriculums, curriculums);

  return (
    <>
      <div className="explore-curriculum">
        <h2 className="theme-h2" id="all-h2">
          All Curriculums
        </h2>
        <div style={{ marginTop: -30, marginBottom: 30 }}>
          Total Curriculums: {curriculums.length}
        </div>

        <div className="data-ouput">
          <div className="external-curriculums-wrapper">
            {curriculums.map(({ Data }, index) => {
              return (
                <div key={index}>
                  {Data.map(
                    ({ Title, Link, LastUpdated, Authors, Subjects }, i) => {
                      return (
                        <a
                          href={Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={i}
                        >
                          <div className="each-ext-cur-div">
                            <p className="ext-cur-title">{Title}</p>
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
                        </a>
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
            <ArrowBtn link="/essays" text="Info on Curriculums" />
          </div>
        </div>
      </div>
    </>
  );
}
