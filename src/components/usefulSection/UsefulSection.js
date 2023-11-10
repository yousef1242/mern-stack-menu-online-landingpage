import { useSelector } from "react-redux";
import "./usefulSection.css";
import { LuMousePointerClick } from "react-icons/lu";
import { TbBrandHeadlessui } from "react-icons/tb";
import { BiUserCheck } from "react-icons/bi";

const UsefulSection = () => {
  const { lan } = useSelector((state) => state.language);
  return (
    <>
      <div className="useful-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
              <h4>
                <span className="span-icon">
                  <LuMousePointerClick />
                </span>
              </h4>
              <h4>
                {lan === "er"
                  ? "منيو بضغطة زر"
                  : "Menu at the touch of a button"}
              </h4>
              <p>
                {lan === "er"
                  ? "إنشاء المنيو الخاص فيك بدقايق"
                  : "Create your own menu in minutes"}
              </p>
              <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
              <h4>
                <span className="span-icon">
                  <TbBrandHeadlessui />
                </span>
              </h4>
              <h4>{lan === "er" ? "ريح راسك" : "Relax your head"}</h4>
              <p>
                {lan === "er"
                  ? "لاتشيل هم تحديثات الاسعار، الفئات، الصور، الخ. كل شي إلكتروني"
                  : "Don't worry about updates of prices, categories, photos, etc. Everything is electronic"}
              </p>
              <p></p>
            </div>
            <div className="col-12 col-md-4">
              <h4>
                <span className="span-icon">
                  <BiUserCheck />
                </span>
              </h4>
              <h4>{lan === "er" ? "ريح عملائك" : "Relax your clients"}</h4>
              <p>
                {lan === "er"
                  ? "لاتتعبهم بالورق وخلهم يتصفحون المنيو من الجوال"
                  : "Don't tire them out with paper and let them browse the menu on their mobile phone"}
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsefulSection;
