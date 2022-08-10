// Explore page. Ideas:
// Graphical visual interface
// Categorisations displayed visually

import { curriculum } from "../data/test_data.js";

export default function Explore() {
  return (
    <>
      <h2>Explore Curriculums</h2>
      <div className="curriculum-wrapper">
        {curriculum.map(
          (
            {
              Title,
              Description,
              Designers,
              Duration,
              Price,
              Location,
              Resources
            },
            index
          ) => {
            return (
              <div className="curriculum-container" key={index}>
                <h3 className="element-title">{Title}</h3>
                <p className="element-description">
                  Description: {Description}
                </p>
                <p> Curriculum Designers: {Designers}</p>
                <p> Duration: {Duration}</p>
                <p> Pricing: {Price}</p>
                <p> Location: {Location}</p>
                <p>
                  {" "}
                  Resources:
                  {Resources.map((e, i) => {
                    return (
                      <div key={i}>
                        <p>{e.Title}</p>
                        <p>
                          {e.Length ? <span>Length: {e.Length}</span> : " "}
                          {e.Link ? (
                            <span>
                              , <a href={e.Link}>Go to Resource</a>
                            </span>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    );
                  })}
                </p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
