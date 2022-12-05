// Essay page
// with imported text components from md

import { ArrowBtn, Spacer } from "../../components/buttons/Buttons";
import { Helmet } from "react-helmet";

export default function CurriculumInfo() {
  return (
    <>
      <Helmet>
        <title>Iters | Curriculum Info</title>
      </Helmet>
      <h2 className="theme-h2" id="curriculuminfo-h2">
        Crafting Curriculums
      </h2>

      <h3 className="theme-h3 p-h3">Curriculum Principles</h3>
      <div className="centered-p">
        <p>
          The following is a set of principles and proposed guidelines for
          crafting a 'good' curriculum. Ideally, one systematically reviews and
          tests all factors; realistically, one skims through and considers an
          assortment of these points.
        </p>
        <table>
          <tbody>
            <tr className="heading-tr">
              <td>Principles</td>
              <td>Iters Proposed Solutions-Actions-Guidelines</td>
            </tr>
            <tr>
              <td>Progression</td>
              <td>
                Explain how steps build into one another. Recommend
                prerequisites. Consider the overall structure as a story.
              </td>
            </tr>
            <tr>
              <td>Focus</td>
              <td>
                Structure the curriculum based only on a select few key
                concepts.
              </td>
            </tr>
            <tr>
              <td>Balance</td>
              <td>
                Ensure the amount of attention given to stages of a curriculum
                is balanced according to judged importance.
              </td>
            </tr>
            <tr>
              <td>Rigour</td>
              <td>
                Consider if enough depth and breadth is provided. Rate resources
                for difficulty. If a curriculum is too shallow, make it part of
                a larger curriculum.
              </td>
            </tr>
            <tr>
              <td>Coherence</td>
              <td>
                Explain the relations of all stages of a curriculum. Especially
                any areas that may stand out as being less coherent and why it
                is included.
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
                Have clear objectives: assessments or ideals, behaviours or
                visions.
              </td>
            </tr>
            <tr>
              <td>Appropriate</td>
              <td>
                Provide multiple visions, goals and expectations to fit the
                learner. Determine the kinds of learners the curriculum most
                suits.
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
                Consider the balance between adding steps to engage socially,
                more widely in society or community and more privately or
                personally.
              </td>
            </tr>
            <tr>
              <td>Scope</td>
              <td>
                The timeframe should be mostly weeks, months, or several years.
                Not a small achievement containing small or detailed steps (this
                is not Wikihow).
              </td>
            </tr>
            <tr>
              <td>Testing</td>
              <td>
                Ideally, the curriculum has been trialled before or at least
                compared with others with similar goals, therefore undergoing a
                reasoned selection process of resources over others available.
              </td>
            </tr>
            <tr>
              <td>Diverse</td>
              <td>
                Includes at least a few platforms or resources from multiple
                sources or people.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="theme-h3 p-h3">Curriculum Problems</h3>
      <div className="centered-p">
        <p>
          Knowing some actionable steps and principles for crafting good
          curriculums, it is also useful to take a look at the problems
          underlying the justifications for such principles.
        </p>
        <ol>
          <li>
            <b>Knowledge.</b> People make choices as to what they learn, thus
            making some knowledge appear more visible, influencing the perceived
            importance and priority of certain disciplines or fields of study.
          </li>
          <li>
            <b>Learner.</b> How much accountability should the learner have in
            terms of goals, outcomes and optionality? The invovlement of the
            learner in the meta process of learning.
          </li>
          <li>
            <b>Technical/Professional.</b> Who should be the ones to be creating
            curriculums? And problems of technical creation and design.
          </li>
          <li>
            <b>Stakeholders.</b> Conflict of values and interests during
            decision-making with the stakeholders involved in making the
            curriculum.
          </li>
          <li>
            <b>Definition.</b> All kinds of instructional materials are labeled
            as "curriculum", which is confusing and ambiguous as hell.
          </li>
          <li>
            <b>Measurement.</b> As the origins, assessments and outcomes of
            curriculums are so varied, it is difficult to measure and therefore
            compare curriculums.
          </li>
          <li>
            <b>Effectiveness.</b> As no consensus of taxonomy exists of
            curricular features, effective curricula is still much of a guessing
            game.
          </li>
          <li>
            <b>Implementation.</b> There is often a difference between the
            intended guidelines for a curriculum, and how a curriculum is
            actually carried out and implemented.
          </li>
        </ol>
        <h3 className="theme-h3">Democratising Curriculums</h3>
        <p>
          People share their 'stories' of learning or experience all the time,
          whether in the form of speeches, biographies, or advice. The primary
          difference here in democratising the making of curriculums is
          departing from an institutionally based task and explicitly putting
          learning goals in the hands of the wider public.
        </p>
        <p>
          Who should be responsible for making curriculums and who should make
          them in the first place and for what purpose? Leading people down a
          path of regret, misery and suffering is completely a possibility, as
          is leading people up a path of empowerment, joy and life satisfaction.
        </p>
        <p>
          Such an endeavour perhaps will skew more towards a kind of liberal
          education, more progressive than conservative, characterised by both a
          more fragmented and connected society.
        </p>
      </div>
      <Spacer height={30} />
      <div className="centered-p">
        <h3 className="theme-h3">References</h3>
        <p>
          Lalor, Angela (2022). 5 Elements of a Relevant Curriculum, ascd;
          https://www.ascd.org/el/articles/5-elements-of-a-relevant-curriculum
        </p>
        <p>
          Linda Darling-Hammond, Lisa Flook, Channa Cook-Harvey, Brigid Barron &
          David Osher (2020) Implications for educational practice of the
          science of learning and development, Applied Developmental Science,
          24:2, 97-140, DOI: 10.1080/10888691.2018.1537791
        </p>
        <p>
          Steiner, David (2017). Curriculum Research: What We Know and Where We
          Need to Go, StandardsWork;
          https://standardswork.org/wp-content/uploads/2017/03/sw-curriculum-research-report-fnl.pdf
        </p>
        <p>
          van den Akker, Jan. (2009). Curriculum design research. In T. Plomp, &
          N. Nieveen (Eds.), An introduction to educational design research (pp.
          37-50). Stichting Leerplan Ontwikkeling (SLO).
        </p>
        <p>
          Wiliam, Dylan. (2013). Principled curriculum design, Redesigning
          Schooling, SSAT.
        </p>
      </div>
      <ArrowBtn link="/explore" text="Explore curriculums" />
      <Spacer height={60} />
    </>
  );
}
