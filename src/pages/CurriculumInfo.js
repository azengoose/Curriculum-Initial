// Essay page
// with imported text components from md

import { ArrowBtn, Spacer } from "../components/Buttons";
import { Helmet } from "react-helmet";

export default function CurriculumInfo() {
  return (
    <>
      <Helmet>
        <title>Iters | Curriculum Info</title>
      </Helmet>
      <h2 className="theme-h2" id="info-h2">
        Good Curriculums
      </h2>
      <ArrowBtn link="/info" text="Back to Info" />

      <h3 className="p-h3">Curriculum Principles</h3>
      <p className="centered-p">
        <p>
          The following is a set of principles and proposed guidelines for
          crafting a good curriculum. Ideally, one could systematically review
          and test factors; realistically, it is respectable to read through and
          consider an assortment of these points.
        </p>
        <table>
          <tr className="heading-tr">
            <td>Principles</td>
            <td>Iters Proposed Solutions-Actions-Guidelines</td>
          </tr>
          <tr>
            <td>Progression</td>
            <td>
              Explain how steps build into one another. Recommended
              prerequisites. Consider the overall structure as a story.
            </td>
          </tr>
          <tr>
            <td>Focus</td>
            <td>
              Structure the curriculum only based on a few key explicit
              concepts. Provide &lt; 7 clear steps.
            </td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>
              Ensure the amount of attention given to stages of a curriculum is
              balanced according to judged importance.
            </td>
          </tr>
          <tr>
            <td>Rigour</td>
            <td>
              Consider if enough depth and breadth is provided. Rate resources
              for difficulty. If a curriculum is too shallow, make it part of a
              larger curriculum.
            </td>
          </tr>
          <tr>
            <td>Coherence</td>
            <td>
              Explain the relations of all stages of a curriculum. Especially
              any areas that may stand out as being less coherent and why it is
              included.
            </td>
          </tr>
          <tr>
            <td>Deliverable</td>
            <td>
              Consider adding options for flexibility and self-pacing. Review
              minimum and maximum timeframes for completion.
            </td>
          </tr>
          <tr>
            <td>Measurable</td>
            <td>
              Make clear objectives: assessments or ideals, behaviours or
              visions.
            </td>
          </tr>
          <tr>
            <td>Appropriate</td>
            <td>
              Provide multiple visions, goals and expectations to fit the
              learner. Determine the kinds of learners it most suits.
            </td>
          </tr>
          <tr>
            <td>Accessibility</td>
            <td>
              Consider accessibility options with language, gender, culture,
              deafness, blindness, broken links, and so on.
            </td>
          </tr>
          <tr>
            <td>Practice-Theory</td>
            <td>
              Consider the balance between actionable steps and mental
              perspectives. Encourage ways to incorporate metacognitive
              practices.
            </td>
          </tr>
          <tr>
            <td>Individual-Society</td>
            <td>
              Consider the balance between adding steps to engage socially, more
              widely in society or community and more privately or personally.
            </td>
          </tr>

          <tr>
            <td>Scope</td>
            <td>
              Timeframe of mostly weeks, months, years. Minimum of 3 steps,
              recommended 5-9 and maximum 16.
            </td>
          </tr>
          <tr>
            <td>Testing</td>
            <td>
              Ideally, the curriculum has been trialled before. With a selection
              process of some resources over many others or rationales,
              justifications.
            </td>
          </tr>
          <tr>
            <td>Diverse</td>
            <td>
              Include a minimum of 2-3 platforms or 3+ authors in the resources.
            </td>
          </tr>
        </table>
      </p>
      <h3 className="p-h3">Problems with Curriculums</h3>
      <p className="centered-p">
        <ol>
          <li>
            Substantive: the classical curriculum question; What knowledge is
            most valuable? What issues seem relevant for inclusion from the
            perspective of societal trends and needs?
          </li>
          <li>
            Knowledge: what is the academic and cultural heritage that seems
            essential for learning and future development?
          </li>

          <li>
            Learner: how much should learning from the personal, educational
            needs and interests of learners themselves be taken into account?
          </li>
          <li>
            Technical-professional: referring to how to address tasks of
            curriculum development;
          </li>
          <li>
            Socio-political, referring to curriculum decision-making processes,
            where values and interests of different individual and agencies are
            at stake
          </li>
        </ol>
        <p>
          <h3>More Problems</h3>
          <ol>
            <li>
              <b>Definition.</b> Bureaucracy, too many cooks in the kitchen
              -&gt; All kinds of instructional materials are being labeled
              "curriculum". Do we need a tighter definition of curriculum or,
              rather, multiple layers for a more capacious definition?
            </li>
            <li>
              <b>Measuring Effectiveness.</b> Because the origin and selection
              of curriculum is so varied, how do we quantify any differences
              between the effectiveness of &ldquo;homegrown&rdquo; versus
              &ldquo;published&rdquo; curriculum or between that which is state
              or district endorsed versus teacher selected?
            </li>
            <li>
              <b>"Good" Curriculums.</b> Because no taxonomy exists of
              curricular features, research has not explored the elements of
              curriculum that really matter in student learning. We know very
              little about what makes a curriculum effective.
            </li>
            <li>
              <b>Distinguish Outcomes.</b> Distinguishing the impact of
              skills-building and knowledge-building features of curricula could
              be a particularly fruitful area of study.
            </li>
            <li>
              <b>Implementation.</b> No industry or research standards exist
              around fidelity of implementation. Thus, study authors often field
              questions about the delta between intended and taught curriculum.
            </li>
            <li>
              <b>Assessments.</b> The use of different assessments to measure
              progress across different schools or districts in a study often
              taints results from curricular interventions or renders them less
              than definitive.
            </li>
          </ol>
        </p>
      </p>
      <Spacer height={30} />
      <p className="centered-p">
        <h3>References</h3>
        <p>
          Curriculum Research: What We Know and Where We Need to Go: SW, Dr
          David Steiner, 2017;
          https://standardswork.org/wp-content/uploads/2017/03/sw-curriculum-research-report-fnl.pdf
        </p>
        <p>SSAT </p>
        <p>ascd</p>
        <p>See how other curriculums have been made:</p>
      </p>
      <ArrowBtn link="/explore" text="Explore curriculums" />
      <Spacer height={60} />
    </>
  );
}
