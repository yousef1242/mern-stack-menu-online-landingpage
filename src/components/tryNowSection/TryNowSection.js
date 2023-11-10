import { useState } from "react";
import "./tryNowSection.css";
import emailjs from "@emailjs/browser";

const TryNowSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const formData = {
    from_name: name,
    from_phoneNumber: phoneNumber,
  };

  const sendToEmailFunction = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vk540no",
        "template_7bs7943",
        formData,
        "R7Bv8jP6-t0XVRN8L"
      )
      .then(
        (result) => {
          console.log("ok");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="tryNow-section py-5" id="tryNowSection">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Try Now</h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <form onSubmit={sendToEmailFunction}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    required
                    type="text"
                    id="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Phone number">Phone number</label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    type="text"
                    id="Phone number"
                  />
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryNowSection;
