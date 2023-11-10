import "./heroSection.css";
import qrCodeHeroSectionImage from "../../images/qr-code-hero-section.png";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { lan } = useSelector((state) => state.language);
  return (
    <>
      <div className="Hero-section" id="homeSection">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-sm-6">
              <h1 className="mb-4">
                {lan === "er"
                  ? "أسهل وأوفر طريقة لعمل منيو الكتروني مع باركود"
                  : "The easiest and most economical way to make an electronic menu with a barcode"}
              </h1>
              <p className="mb-5">
                {lan === "er"
                  ? "مع ديش منيو يمكنك عمل منيو الكتروني مع باركود وايمكانية الطلب من خلاله"
                  : "With Dish Menu, you can create an electronic menu with a barcode and the ability to order from it"}
              </p>
              <button>{lan === "er" ? "جرب الان" : "Try now"}</button>
            </div>
            <div className="col-12 col-sm-6">
              <img
                className="qrCodeHeroSectionImage"
                src={qrCodeHeroSectionImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
