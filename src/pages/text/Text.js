// Textual Snippets in one file

export function TextAbout() {
  // ad iter discendi / pro iter discendi
  // iter学 (wei le xuexi zhilu) 为了学习之旅
  // Evaluating curriculums: qualitative-quantitative, trust, futurism
  // Plans: quotes, futurism
  return (
    <>
      <div className="centered-p">
        <p>
          From <em>iter</em>, Latin for journey, trip, course, path and (
          <em>xue</em>) 学, Chinese for comprehend, learning, knowledge.
        </p>
        <p>
          <em>ad iter discendi.</em> <em>(wei le xuexi zhilu)</em> 为了学习之旅.
          For the journey of learning.
        </p>
        <p>
          Currently, this project is in early stages of MVP implementation. If
          you would like to be involved in the project, or just get to know our
          ethos, feel free to check out this page (soon) with deeper
          information, rationales, essays and of course, a proposed curriculum
          for this project.
        </p>
        <h3 className="theme-h3">Credits</h3>
        <p>
          Images on home page created by DALL-E 2 X Angus. Designers and
          Developers: Angus, ..., and You?
        </p>
      </div>
    </>
  );
}

export function TextCreateCurriculum() {
  // Background Information: Curriculums can only be submitted for pending. It is judged by the public in an intermediary period and by a rotating committee, before being established into the database proper.
  return (
    <>
      <h3 className="theme-h3">Now Under Construction</h3>
      <p>
        The main issue is that we don't want creating curriculums to feel like
        filling in a form. What it should be, is a fulfilling and long-term
        exercise anyone can begin doing as a means to share their journeys and
        paths, not just the results of the journey. We're working on it – crude
        estimated time of completion by November 2022.
      </p>
    </>
  );
}
export function TextAddCurriculum() {
  return (
    <>
      <h3 className="theme-h3">Tips for Submissions</h3>
      <p>
        Submit externally completed curriculums. For example, these can be
        websites, blogs, uploaded videos, images, diagrams. Curriculums can only
        be submitted for pending. It is judged by the public in an intermediary
        period and by a rotating committee, before being established into the
        database proper.
      </p>
    </>
  );
}
