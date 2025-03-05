import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="main-padding">
        <div className="footer-content">
          <div className="footer-main-content flex justify-between">
            <div>
              <img
                className="footer-logo"
                src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
              />
            </div>
            <div className="flex justify-between footer-terms">
              <div>Terms & Condition</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <div className="footer-hr">
            <div className="hr-content">
              © 2024. Unlisted Shares India. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
