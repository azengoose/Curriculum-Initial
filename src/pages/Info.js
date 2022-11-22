// Essay page
// with imported text components from md

import { ArrowBtn, Spacer } from "../components/Buttons";
import { Helmet } from "react-helmet";

export default function Info() {
  return (
    <>
      <Helmet>
        <title>Iters | Info</title>
      </Helmet>
      <h2 className="theme-h2 theme-h2-short" id="info-h2">
        Info
      </h2>
      <h3 className="theme-h3 p-h3">
        Collective Challenges & Personal Problems
      </h3>
      <div className="centered-p">
        <p>
          <b>
            What are good ways that we can live, learn and flourish while facing
            the full complexity of the world?
          </b>
        </p>
        <p>
          In variations, this is a question that relentlessly haunts me in my
          personal journey of self-directed learning, in the search for
          resources, advice and curriculums. Part of this task, involves
          creating many of my own curriculums, adapting, evaluating and
          reviewing as I progress through them.
        </p>
        <p>
          Learning, and growth of all kinds, is barely confined in the walls of
          schools. Institutions, whether schools, universities, colleges, online
          platforms, when they don’t adapt to changing norms, decay. Despite
          this, there is a considerable difficulty to find and undertake
          learning paths that are not based in institutions. Heading into
          unknown territory without a map is...many things – inefficient,
          unmotivating, perhaps exciting, sure.
        </p>
        <p>
          Unmistakably, the internet is the limitless, bottomless well of
          knowledge and information that humans once only dreamed of. In this
          chaos, lies the opportunity for order. While part of my plan is to pry
          at the floodgates and broaden the landscape for what it means to
          undergo a learning path in society, my hope is that this also
          contributes to a renewed sense of clarity in a newly disorienting, yet
          blooming world.
        </p>
        <p>
          Whoever, wherever, whenever and however you are, I hope that you will
          find a place and time for the pursuit of a learning path. Life is
          long, and lifelong learning is the end of a short life rich with
          empathy, excellence and experience.
        </p>
        <p>Written by Nottei Ai :)</p>
      </div>
      <ArrowBtn link="/explore" text="Explore curriculums" />
      <h3 className="theme-h3 p-h3">What Makes Good Curriculums</h3>
      <div className="centered-p">
        <p>
          3 main points to bring to attention when it comes to curriculums
          presented in an accessibly online format:
        </p>
        <ol>
          <li>
            <strong>Scope</strong>: The timeframe should be mostly weeks,
            months, or several years. Not a small achievement containing small
            or detailed steps (this is not Wikihow).
          </li>
          <li>
            <strong>Testing</strong>: Ideally, the curriculum has been trialled
            before or at least compared with others with similar goals,
            therefore undergoing a justified or reasoned selection process of
            resources over others available.
          </li>
          <li>
            <strong>Diversity</strong>: Includes at least a few platforms or
            resources from multiple sources/people.
          </li>
        </ol>
      </div>
      <ArrowBtn link="/curriculuminfo" text="Curriculums, More Detail" />
      <Spacer height={60} />
    </>
  );
}

// const [content, setContent] = useState("");

// useEffect(() => {
//   fetch("Essays.md")
//     .then((res) => res.text())
//     .then((text) => setContent(text));
// }, []);

// export default function Guidelines() {
//   return (
//     <>
//       <div className="centered-p">
//         <h2 className="theme-h2">The Elements of a Curriculum</h2>
//         <p>
//           Before you click away, the following proposed elements have been
//           grouped in one way to serve as an encompassing guideline for what a
//           fully-fleshed out curriculum would look like.
//         </p>
//         <p>
//           It isn't required or even usual for all elements to be incorporated
//           into a curriculum for it to be a good or popular curriculum.
//         </p>
//         <p>
//           If you are not involved in some standard body or institution in the
//           individual creation of a curriculum, I encourage you to be bold and be
//           selective about what to emphasise in your curriculum.
//         </p>
//         <h3 className="theme-h3">Description, Tagline, Authors</h3>
//         <p></p>
//         <h3 className="theme-h3">Duration, Pricing, Availability, Location</h3>
//         <p></p>
//         <h3 className="theme-h3">Vision, Objectives, Rationales</h3>
//         <p></p>
//         <h3 className="theme-h3">Steps, Progression</h3>
//         <p></p>
//         <h3 className="theme-h3">Resources, Content, Information</h3>
//         <p></p>
//         <h3 className="theme-h3">Learning Experience</h3>
//         <p></p>
//         <h3 className="theme-h3">Reviews, Evaluations, Tests</h3>
//         <p></p>
//         <h3 className="theme-h3">Similar Curriculums, Comparisons, Context</h3>
//         <p></p>
//       </div>
//     </>
//   );
// }
