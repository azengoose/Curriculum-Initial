// For easy edit and importing of default buttons

import { Link } from "react-router-dom";
import "./buttons.css";

export function DefaultBtn(link, text) {
  return (
    <Link className="link" to={link}>
      <button className="theme-btn">{text}</button>
    </Link>
  );
}

export function ArrowBtn({ link, text }) {
  return (
    <div>
      <Link className="link arrow-link" to={link}>
        <button className="arrow-btn">
          {text}{" "}
          <img
            className="arrow-icon"
            src="https://cdn-icons-png.flaticon.com/512/271/271226.png"
          />
        </button>
      </Link>
    </div>
  );
}

export function Spacer({ height }) {
  return <div style={{ height: height }}></div>;
} // Usage: <Spacer height={40} />

export function Accordion({ title, panel, panel2 }) {
  function handleChange(e) {
    var acc = e.target;
    acc.classList.toggle("active");
    var panel = acc.nextElementSibling;
    panel.classList.toggle("panel-active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return (
    <>
      <button className="accordion" onClick={(e) => handleChange(e)}>
        {title}
      </button>
      <div className="panel">
        {panel}
        {panel2}
      </div>
    </>
  );
}
