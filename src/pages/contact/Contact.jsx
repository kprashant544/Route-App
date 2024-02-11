import { useState } from "react";
import "../contact/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [check, setCheck] = useState(false);
  const [nameError, setNameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [passError, setPassError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [checkError, setCheckError] = useState("");

  function onSubmit() {
    console.log(name);
    console.log(mail);
    console.log(pass);
    console.log(gender);
    console.log(check);
    console.log(country);

    if (!name) {
      setNameError("Please enter your name");
    } else {
      setNameError("");
    }

    if (!mail) {
      setMailError("Please enter your e-mail");
    } else {
      setMailError("");
    }

    if (!pass) {
      setPassError("Please enter your password");
    } else {
      setPassError("");
    }

    if (!gender) {
      setGenderError("Please tick your gender");
    } else {
      setGenderError("");
    }

    if (!country) {
      setCountryError("Please select your country");
    } else {
      setCountryError("");
    }
    if (!check) {
      setCheckError("Please check to agree");
    } else {
      setCheckError("");
    }
  }

  return (
    <>
      <div className="main">
        <div className="head">
          <h1>Please fill up the form</h1>
        </div>
        <div className="form-div">
          <form>
            <div>
              <label>
                Name:
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your name"
                />{" "}
                <span className="error">{nameError}</span>
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter your e-mail"
                />{" "}
                <span className="error">{mailError}</span>
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your password"
                />{" "}
                <span className="error">{passError}</span>
              </label>
            </div>
            <div className="last">
              <div className="gender">
                <label>Gender : </label>
                <label>
                  Male
                  <input
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    type="radio"
                    name="gender"
                    value={"male"}
                  />{" "}
                </label>
                <label>
                  Female
                  <input
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    type="radio"
                    name="gender"
                    value={"female"}
                  />
                </label>
                <span className="error">{genderError}</span>
              </div>
              <div>
                <label>Country: </label>
                <select
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  name="country"
                >
                  <option value="">Select...</option>
                  <option value="nep">Nepal</option>
                  <option value="usa">USA</option>
                  <option value="aus">Australia</option>
                </select>
              </div>
              <span className="error">{countryError}</span>
              <div>
                <input
                  onChange={(e) => {
                    setCheck(e.target.checked);
                  }}
                  type="checkbox"
                />{" "}
              </div>
              <span className="error">{checkError}</span>
              <div>
                <button
                  className="btn-1"
                  onClick={(e) => {
                    console.log(e.preventDefault());
                    onSubmit();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
