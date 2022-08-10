//
import { curriculum } from "../data/test_data.js";

export default function CurricHome() {
  return (
    <>
      <div className="featured-curriculums">
        <h3 id="featured-curriculums-title">Featured curriculums: </h3>
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
                  <h3 className="curriculum-title">{Title}</h3>
                  <div className="curriculum-description">
                    <p>Description: {Description}</p>
                    <p> Curriculum Designers: {Designers}</p>
                    <p> Duration: {Duration}</p>
                    <p> Pricing: {Price}</p>
                    <p> Location: {Location}</p>
                  </div>
                  <div className="curriculum-resources">
                    <p> Resources: </p>
                    {Resources.map((e, i) => {
                      return (
                        <div className="curriculum-resource" key={i}>
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
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
