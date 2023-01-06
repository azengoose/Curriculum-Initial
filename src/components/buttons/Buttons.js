// For easy edit and importing of default buttons

import { Link } from "react-router-dom";
import ProgressIcon from "../../data/images/progress-icon.svg";
import CompletedIcon from "../../data/images/completed-icon.svg";
import ProfileIcon from "../../data/images/profile-icon.svg";
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

export function Hamburger({ title, panel, panel2, panel3, outpanel }) {
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
      <button className="accordion" onMouseOver={(e) => handleChange(e)}>
        {title}
      </button>
      <div className="panel">
        <div>{panel}</div>
        <div>{panel2}</div>
        <div>{panel3}</div>
        <div>{outpanel}</div>
      </div>
    </>
  );
}

export function SubNav({ mainLink, fLink, sLink, tLink, outpanel }) {
  function handleChange(e) {
    var sub = e.target;
    sub.classList.toggle("profile-nav-active")
    var menu = sub.nextElementSibling;
    menu.classList.toggle("menu-active");
  }
  return (
    <>
      <Link
        className="sub-nav link nav-link"
        to={mainLink}
        onMouseOver={(e) => handleChange(e)}
      >
        Profile
        <img id="main-nav-profile-img" src={ProfileIcon} alt="profile icon" />
      </Link>

      <div className="sub-nav-menu"
      >
        <div>
          <Link className="sub-nav-menu-div" to={fLink}>
            <img
              className="profile-nav-img"
              src={ProgressIcon}
              alt="progress icon"
            />
            Saved
          </Link>
        </div>
        <div>
          <Link className="sub-nav-menu-div" to={sLink}>
            <img
              className="profile-nav-img"
              src={CompletedIcon}
              alt="completed icon"
            />
            Entries
          </Link>
        </div>
        <div>
          <Link className="sub-nav-menu-div" to={tLink}>
            <img
              className="profile-nav-img"
              src={ProfileIcon}
              alt="profile icon"
            />
            Profile Details
          </Link>
        </div>
        <div>
          {outpanel}
        </div>
      </div>
    </>
  );
}
