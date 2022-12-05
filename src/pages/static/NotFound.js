// For 404 or Not Found Pages

import { Helmet } from "react-helmet";
import { ArrowBtn } from "../../components/buttons/Buttons";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Yeah sorry, mate.</title>
      </Helmet>
      <div className="wrapper">
        <h2 className="theme-h2">Sorry for your loss. </h2>
        <h2>This page link doesn't exist. It happens.</h2>
        <p>
          Maybe try hitting rewind, or rechecking you've got the right link.
        </p>
        <p>
          Or instead, check out the homepage of curriculums. Guaranteed you
          haven't done all of them yet.
        </p>
        <ArrowBtn link="/" text="Back Home" />
        <p>
          If you want to find out more about the website you're currently on,
          see:
        </p>
        <ArrowBtn link="/about" text="About Us" />
      </div>
    </>
  );
}
