// ScrollToTop.jsx
// https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

// Loading Spinner
export function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}
