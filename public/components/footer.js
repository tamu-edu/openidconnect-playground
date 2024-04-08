import React from "react";

const Footer = () => {
  const handleOpen = () => {
    document.querySelector("#ccpa-modal").style.display = "block";
  };

  const handleCLose = () => {
    document.querySelector("#ccpa-modal").style.display = "none";
  };

  const handleOpenCookieConsent = () => {
    window.OneTrust.ToggleInfoDisplay();
  };

  return (
    <div>
      <footer className="main-footer">
        <div className="main-footer-container">
          <div className="privacy-links-container">
            <a href="https://auth0.com/privacy" target="_blank">
              Privacy
            </a>
            <a href="https://auth0.com/web-terms" target="_blank">
              Terms of Service
            </a>
            <button className="as-anchor" id="open-ccpa" onClick={handleOpen}>
              Your Privacy Choices{" "}
            </button>
            <img
              className="ccpa-toggle"
              src="https://cdn.auth0.com/website/footer/ccpa.svg"
              alt="Privacy choices"
            />
          </div>
          <div id="ccpa-modal">
            <button id="close-ccpa" onClick={handleCLose}>
              x
            </button>
            <h3 className="title">Your Privacy Choices</h3>
            <p className="paragraph">
              Depending on your state of residence, including if you are a
              California resident, you have the right to opt out of certain
              sharing of personal information with third-party ad partners. We
              may share personal information with third-party ad partners, such
              as through cookies or by providing lists of email addresses for
              potential customers, so that we can reach them across the web with
              relevant ads.
            </p>
            <p className="paragraph">
              If you wish to opt out of this sharing of your personal data in
              connection with cookies, please update your{" "}
              <button className="settings" onClick={handleOpenCookieConsent}>
                cookie settings
              </button>
              .
            </p>
            <p className="paragraph">
              If you wish to opt out of email-based sharing, provide your email
              address at{" "}
              <a
                className="settings"
                href="https://www.okta.com/your-privacy-choices/"
                target="_blank"
              >
                this link
              </a>
              .
            </p>
          </div>
          <div className="">
            <span>Crafted by</span>
            <span className="auth0-badge"></span>
            <span>
              © {new Date().getFullYear()} Okta, Inc. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
