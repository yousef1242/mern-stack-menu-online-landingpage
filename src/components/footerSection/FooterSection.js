import { useSelector } from "react-redux";
import "./footerSection.css";

const FooterSection = () => {
  const { lan } = useSelector((state) => state.language);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="footer-section">
      <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 mb-sm-0 mb-3">
              <h2>
                <span className="d-inline">DISH</span>
                <span className="fw-bold">MENU</span>
              </h2>
            </div>
            <div className="col-12 col-sm-4">
              <h3 className="mb-3">{lan === "er" ? "روابط مفيدة" : "Main links"}</h3>
              <span
                className="footerlink"
                onClick={() => scrollToSection("homeSection")}
              >
                {lan === "er" ? "  الرئيسية" : "Home"}
              </span>
              <span
                onClick={() => scrollToSection("featureSection")}
                className="footerlink"
              >
                {lan === "er" ? " المميزات " : "Features"}
              </span>
              <span
                onClick={() => scrollToSection("priceSection")}
                className="footerlink"
              >
                {lan === "er" ? " الباقات " : "Price"}
              </span>
              <span
                onClick={() => scrollToSection("tryNowSection")}
                className="footerlink"
              >
                {lan === "er" ? " جرب الان " : "Try now"}
              </span>
            </div>
            <div className="col-12 text-center mt-5">
              <p className=" text-white">Developed by Yousef Ahmed ©</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
