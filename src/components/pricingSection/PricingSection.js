import { useSelector } from "react-redux";
import "./pricingSection.css";
import { AiOutlineCheck } from "react-icons/ai";

const PricingSection = () => {
  const { lan } = useSelector((state) => state.language);
  return (
    <>
      <div className="pricing-section py-5" id="priceSection">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            {lan === "er" ? "الاسعار" : "Pricing"}
          </h2>
          <div className="row">
            <div className="col-6 text-center month-plan py-3">
              <span className="d-block mb-4">
                {lan === "er" ? "شهر" : "month"}
              </span>
              <h3 className="mb-3">200 EGP</h3>
              <span className="mb-4 d-block fw-bold">
                {lan === "er" ? "كل شهر" : "per month"} (EGP)
              </span>
              <div className="features-for-plan d-flex flex-column align-items-center">
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">{lan === "er" ? "باركود مجاني" : "Free qrcode"}</span>
                </div>
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">
                    {lan === "er" ? "منتجات غبر محدودة" : "No limited products"}
                  </span>
                </div>
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">
                    {lan === "er"
                      ? "اصناف غبر محدودة"
                      : "No limited categories"}
                  </span>
                </div>
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">
                    {lan === "er" ? "طلبات غبر محدودة" : "No limited orders"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 text-center year-plan py-3">
              <span className="d-block mb-4">
                {lan === "er" ? "سنة" : "year"}
              </span>
              <h3 className="mb-3">2000 EGP</h3>
              <span className="mb-4 d-block fw-bold">
                {lan === "er" ? "كل سنة" : "per year"} (EGP)
              </span>
              <div className="features-for-plan d-flex flex-column align-items-center">
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">{lan === "er" ? "باركود مجاني" : "Free qrcode"}</span>
                </div>
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">
                    {lan === "er" ? "منتجات غبر محدودة" : "No limited products"}
                  </span>
                </div>
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">
                    {lan === "er"
                      ? "اصناف غبر محدودة"
                      : "No limited categories"}
                  </span>
                </div>
                <div className="mb-3">
                  <AiOutlineCheck />
                  <span className="ms-2">
                    {lan === "er" ? "طلبات غبر محدودة" : "No limited orders"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
