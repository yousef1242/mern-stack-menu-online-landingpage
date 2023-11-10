import { changeLanguageAction } from "../../rtk/languageSlice";
import "./headerSection.css";
import { useDispatch, useSelector } from "react-redux";

const HeaderSection = () => {
  const { lan } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="header-section">
        <div className="container">
          <div className="row align-items-center">
            {/* logo */}
            <div className="col-6 col-md-2">
              <h2>
                <p className="d-inline">DISH</p>
                <span className="fw-bold">MENU</span>
              </h2>
            </div>
            {/* links above md */}
            <div className="col-12 d-md-block d-none col-md-8 text-center linksAboveMd">
              <span
                className="navlink"
                onClick={() => scrollToSection("homeSection")}
              >
                {lan === "er" ? "  الرئيسية" : "Home"}
              </span>
              <span
                onClick={() => scrollToSection("featureSection")}
                className="navlink"
              >
                {lan === "er" ? " المميزات " : "Features"}
              </span>
              <span
                onClick={() => scrollToSection("priceSection")}
                className="navlink"
              >
                {lan === "er" ? " الباقات " : "Price"}
              </span>
              <span
                onClick={() => scrollToSection("tryNowSection")}
                className="navlink"
              >
                {lan === "er" ? " جرب الان " : "Try now"}
              </span>
            </div>
            {/* selelct lan */}
            <div className="col-6 col-md-2" style={{ textAlign: "end" }}>
              <select
                className="selectLan"
                onChange={(e) => dispatch(changeLanguageAction(e.target.value))}
              >
                <option selected={lan === "er" ? true : false} value="er">
                  Arabic
                </option>
                <option selected={lan === "en" ? true : false} value="en">
                  English
                </option>
              </select>
            </div>
            {/* links under md */}
            <div className="col-12 d-md-none d-flex gap-3 justify-content-center mt-md-0 mt-4 col-md-8">
              <span
                className="navlink"
                onClick={() => scrollToSection("homeSection")}
              >
                {lan === "er" ? "  الرئيسية" : "Home"}
              </span>
              <span
                onClick={() => scrollToSection("featureSection")}
                className="navlink"
              >
                {lan === "er" ? " المميزات " : "Features"}
              </span>
              <span
                onClick={() => scrollToSection("priceSection")}
                className="navlink"
              >
                {lan === "er" ? " الباقات " : "Price"}
              </span>
              <span
                onClick={() => scrollToSection("tryNowSection")}
                className="navlink"
              >
                {lan === "er" ? " جرب الان " : "Try now"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
