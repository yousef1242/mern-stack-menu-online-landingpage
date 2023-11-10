import "./footerSection.css";

const FooterSection = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <h2>
                <p className="d-inline">DISH</p>
                <span className="fw-bold">MENU</span>
              </h2>
            </div>
            <div className="col-7 text-end">
                <p className=" text-white">Developed by Yousef Ahmed ©</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
