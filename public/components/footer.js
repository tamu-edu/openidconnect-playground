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
            <a href="https://it.tamu.edu/" target="_blank">
              Technology Services
            </a>
            <a href="https://it.tamu.edu/site-policies.php" target="_blank">
              Site Policies
            </a>
            <a href="https://itaccessibility.tamu.edu/" target="_blank">
              Accessibility
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
