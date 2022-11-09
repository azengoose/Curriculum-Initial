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
      <h2 className="theme-h2" id="info-h2">
        Info
      </h2>
      <h3 className="p-h3">Personal Problems</h3>
      <p className="centered-p">
        <p>
          The year is 2020. As the sounds of life retreated into homes and
          silence began occupying streets, my peers and I quietly completed our
          final years of formal education. While students, teachers, parents
          bravely adapted to navigate a new world, I was beginning to struggle
          with the issue I now find most compelling.
        </p>
        <p>
          <span>I want to learn everything.</span>
        </p>
        <p>
          Yeah, you can say it&rsquo;s selfish. But that&rsquo;s not the end
          point. It&rsquo;s been said before. It has been said to be too
          ambitious, too wide, too general, a meaningless goal that will leave
          you aimless and without a job.
        </p>
        <p>
          I had internet access. So I began researching for online and offline
          resources, advice and curriculums and furiously learning with a focus
          on breadth, rather than specialisation. I made plenty of my own
          curriculums, adapted them as I went, completed them. Needless to say,
          they were mine. They spurred me to do what no university or college
          will ask of you.
        </p>
        <p>
          Life is long, and lifelong learning is the end of a short life rich
          with empathy, excellence and experience.
        </p>
        <p>
          At multiple points during these trials, I realised that I was often
          heading into territory without a map. You can do it. It&rsquo;s
          possible. But the prevalence of plans, curriculums, stories and guides
          to lean on in times of uncertainty, made life more bearable and more
          enjoyable for me. Imagine mentors, imagine teachers, imagine any role
          model you look up to, with a lifestyle that you want to emulate,
          sharing and laying out their plans. You look over their shoulder. This
          is gold.
        </p>
        <p>
          At some point I realised that for me, this was never going to stop. In
          the back of my mind, I had already conceptualised lifelong learning,
          but only after attacking the problem of breadth head-on, did it
          crystallise in my heart. This will not end.
        </p>
        <p>
          From one of a kaleidoscopic many of curious, learning nuts, to
          another, here are a selection of quality curriculums from the
          internet.
        </p>
        <p>- Not AI, Nov 2022</p>
      </p>
      <h3 className="p-h3">What Makes Good Curriculums</h3>
      <p className="centered-p">
        <p>
          The main unique points I wish to bring to attention when it comes to
          curriculums presented in an accessibly online format:
        </p>
        <ol>
          <li>
            <strong>Scope</strong>: Not containing small or detailed steps.
            Completing the curriculum should have a timeframe of mostly weeks,
            months, or several years. Minimum of 3 steps, recommended 5-9 and
            maximum 16 (rough guidelines).
          </li>
          <li>
            <strong>Testing</strong>: Ideally, the curriculum has been trialled
            before. With a selection process of some resources over many others
            or rationales, justifications. Not just, this was something I tried
            and it is therefore the best resource.
          </li>
          <li>
            <strong>Diversity</strong>: Include a minimum of 2-3 platforms or 3+
            authors in the resources.
          </li>
        </ol>
        <p>Problems and principles in more detail:</p>
      </p>
      <ArrowBtn link="/curriculuminfo" text="Curriculums, More Detail" />
      <h3 className="p-h3">Collective Challenges</h3>
      <p className="centered-p">
        <p>
          The internet of the first quarter of the 21st century is a rampant
          mess of content and resources. Iterxue is one such attempt to help
          reconcile and curate this hole in the web towards a more integrative
          model of technologically assisted education and lifelong learning.
        </p>
        <p>
          There is little to no consensus or well-formed method of vessel for
          integrating the premise of traditional education as it has existed for
          the past 100 hundred years ago since the conception of the modern
          'school' originated from the economic model of factory work, which is
          becoming increasingly redundant, and especially as the core modus
          operandi of education.
        </p>
      </p>
      <ArrowBtn link="/explore" text="Explore curriculums" />
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
