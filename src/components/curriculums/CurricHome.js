// FEATURED CURRICULUMS @Home
// Basic Interface:
//    Max 2 masonry columns that only display a summary of
//    the curriculum details. Emphasis on basic readability
//    and visual engagement.

import "../../pages/curriculum.css";
import InternalCurriculums from "./InternalCurriculums";

export default function CurricHome() {
  return (
    <>
      <div className="featured-curriculums">
        <h2>Featured curriculums: </h2>
        <InternalCurriculums />
      </div>
    </>
  );
}

// import { curriculum } from "../../../data/test_data.js";
// {/* <div className="featured-curriculum-wrapper">
//           {curriculum
//             .slice(0, 4)
//             .map(
//               (
//                 {
//                   Title,
//                   Description,
//                   Designers,
//                   LastUpdate,
//                   Duration,
//                   Price,
//                   Location,
//                   Resources,
//                   Steps,
//                   Reviews
//                 },
//                 index
//               ) => {
//                 return (
//                   <div className="curriculum-container" key={index}>
//                     <h3 className="curriculum-title">{Title}</h3>
//                     <div className="curriculum-description">
//                       <p>Description: {Description}</p>
//                       <p> Curriculum Designers: {Designers}</p>
//                       <p>
//                         Last Updated:
//                         {LastUpdate ? <span> {LastUpdate}</span> : " N/A"}
//                       </p>
//                       <p> Duration: {Duration}</p>
//                       <p> Pricing: {Price}</p>
//                       <p> Location: {Location}</p>
//                     </div>
//                     <div className="curriculum-resources">
//                       <p> Resources: </p>
//                       {Resources.map((e, i) => {
//                         return (
//                           <div className="curriculum-resource" key={i}>
//                             <p>{e.Title}</p>
//                             <p>
//                               {e.Length ? <span>Length: {e.Length}</span> : " "}
//                               {e.Link ? (
//                                 <span>
//                                   , <a href={e.Link}>Go to Resource</a>
//                                 </span>
//                               ) : (
//                                 ""
//                               )}
//                             </p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     <div className="curriculum-steps">
//                       <p> Steps: </p>
//                       {Steps.map((e, i) => {
//                         return (
//                           <div className="curriculum-step" key={i}>
//                             <p>{e.Title}</p>
//                             <p>{e.Description}</p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     <div className="curriculum-reviews">
//                       <p> Reviews: </p>
//                       {Reviews.map((e, i) => {
//                         return (
//                           <div className="curriculum-review" key={i}>
//                             <p>by {e.Name}</p>
//                             <p>Rating: {e.Stars} out of 5 </p>
//                             <p>{e.ReviewText}</p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 );
//               }
//             )}
//         </div> */}
