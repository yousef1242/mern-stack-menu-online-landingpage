import { useSelector } from "react-redux";
import "./featuresSection.css";
import advantagesImage from "../../images/Advantages-pana.png";
import featuresSectionImagesQrCode from "../../images/featuresSectionImages-qrcode.png";
import featuresSectionImageDashboard from "../../images/featuresSectionImage-Dashboard.png";
import featuresSectionImagesDesign from "../../images/featuresSectionImage-Design.png";
import featuresSectionImagesOnlineOrder from "../../images/featuresSectionImage-OnlineOrder.png";
import featuresSectionImagesCategories from "../../images/featuresSectionImage-Categories.png";

const FeaturesSection = () => {
  const { lan } = useSelector((state) => state.language);
  return (
    <>
      <div className="features-section py-5" id="featureSection">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            {lan === "er" ? "المميزات" : "Features"}
          </h2>
          <div className="row mt-4 align-items-center">
            <div className="col-6 d-md-block d-none">
              <img src={advantagesImage} className="img-fluid" alt="" />
            </div>
            <div className="col-12 features-div col-md-6">
              <div className="mb-3 d-flex align-items-center gap-3">
                <img src={featuresSectionImagesDesign} alt="" />
                <span>{lan === "er" ? "تصميم عصري احترافي" : "Professional modern design"}</span>
              </div>
              <div className="mb-3 d-flex align-items-center gap-3">
                <img src={featuresSectionImageDashboard} alt="" />
                <span>{lan === "er" ? "لوحة تحكم كاملة" : "Full control panel"}</span>
              </div>
              <div className="mb-3 d-flex align-items-center gap-3">
                <img src={featuresSectionImagesQrCode} alt="" />
                <span>{lan === "er" ? "باركود سريع" : "Fast qrcode"}</span>
              </div>
              <div className="mb-3 d-flex align-items-center gap-3">
                <img src={featuresSectionImagesCategories} alt="" />
                <span>{lan === "er" ? "تصنيف المنتجات" : "Product Classification"}</span>
              </div>
              <div className="mb-3 d-flex align-items-center gap-3">
                <img src={featuresSectionImagesOnlineOrder} alt="" />
                <span>{lan === "er" ? "طلب مباشر" : "Quick Order"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
