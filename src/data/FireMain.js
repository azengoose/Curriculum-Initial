import "./fire.css";

export default function FireMain() {
  return (
    <>
      <div>
        <header className="">
          <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
            <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
              <h3>Lujourn</h3>
            </div>
            <div id="user-container">
              <div hidden id="user-pic"></div>
              <div hidden id="user-name"></div>
              <button
                hidden
                id="sign-out"
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
              >
                Sign-out
              </button>
              <button
                id="sign-in"
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
              >
                <i className="material-icons">account_circle</i>Sign-in with
                Google
              </button>
            </div>
          </div>
        </header>

        <main>
          <h3>Create Resource:</h3>
          <p>
            (Need to create backend functionality that redirects to new page and
            connects database with field inputs)
          </p>
        </main>

        {/* <main className="mdl-layout__content mdl-color--grey-100">
          <div
            id="messages-card-container"
            className="mdl-cell mdl-cell--12-col mdl-grid"
          >
            <div
              id="messages-card"
              className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop"
            >
              <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                <div id="messages"></div>
                <form id="message-form" action="#">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="message"
                      autoComplete="off"
                    />
                    <label className="mdl-textfield__label" htmlFor="message">
                      Message...
                    </label>
                  </div>
                  <button
                    id="submit"
                    disabled
                    type="submit"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  >
                    Send
                  </button>
                </form>
                <form id="image-form" action="#">
                  <input
                    id="mediaCapture"
                    type="file"
                    accept="image/*"
                    capture="camera"
                  />
                  <button
                    id="submitImage"
                    title="Add an image"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white"
                  >
                    <i className="material-icons">image</i>
                  </button>
                </form>
              </div>
            </div>

            <div
              id="must-signin-snackbar"
              className="mdl-js-snackbar mdl-snackbar"
            >
              <div className="mdl-snackbar__text"></div>
              <button className="mdl-snackbar__action" type="button"></button>
            </div>
          </div>
        </main> */}
      </div>
    </>
  );
}
