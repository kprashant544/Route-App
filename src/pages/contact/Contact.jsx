import { useState } from "react";
import "../contact/contact.css";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Contact() {
  const [country1, setCountry1] = useState("");

  const handleChange = (event) => {
    setCountry1(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    check: false,
  });

  const [formError, setFormError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    genderError: "",
    countryError: "",
    checkError: false,
  });

  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [pass, setPass] = useState("");
  // const [gender, setGender] = useState("");
  // const [country, setCountry] = useState("");
  // const [check, setCheck] = useState(false);
  // const [nameError, setNameError] = useState("");
  // const [mailError, setMailError] = useState("");
  // const [passError, setPassError] = useState("");
  // const [genderError, setGenderError] = useState("");
  // const [countryError, setCountryError] = useState("");
  // const [checkError, setCheckError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    onSubmit();

    setFormError({
      nameError: "",
      emailError: "",
      passwordError: "",
      genderError: "",
      countryError: "",
      checkError: "",
    });
    if (!formData.name) {
      setFormError((state) => {
        return { ...state, nameError: "Please enter your name" };
      });
    }

    if (!formData.email) {
      setFormError((state) => {
        return { ...state, emailError: "Please enter your e-mail" };
      });
    }

    if (!formData.password) {
      setFormError((state) => {
        return { ...state, passwordError: "Please enter your password" };
      });
    }

    if (!formData.gender) {
      setFormError((state) => {
        return { ...state, genderError: "Please enter your gender" };
      });
    }

    if (!formData.country) {
      setFormError((state) => {
        return { ...state, countryError: "Please select your country" };
      });
    }
    if (!formData.check) {
      setFormError((state) => {
        return { ...state, checkError: "Please check to agree" };
      });
    }
  }
  console.log(formData);
  return (
    <>
      <div className="main">
        <div className="form-div">
          <h1>Reach Us</h1>
          <form>
            <div>
              <TextField
                helperText="Please enter your name"
                required
                id="demo-helper-text-aligned"
                label="Name"
              />
              <TextField
                helperText="Enter your e-mail"
                required
                id="demo-helper-text-aligned-no-helper"
                label="Email"
              />
              <FormControl required>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>

                <Select
                  sx={{ marginTop: "10px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country1}
                  label="Country"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Nepal</MenuItem>
                  <MenuItem value={20}>USA</MenuItem>
                  <MenuItem value={30}>Australia</MenuItem>
                  <MenuItem value={40}>Canada</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ marginTop: "10px" }}
                required
                id="demo-helper-text-aligned-no-helper"
                label="Enter your message"
                multiline
                rows={5}
                maxRows={10}
              />
              <Stack sx={{ marginTop: "9px" }} spacing={1} direction="column">
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Stack>
              <label>
                Name:
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  type="text"
                  placeholder="Enter your name"
                />{" "}
                <span className="error">{formError.nameError}</span>
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  type="email"
                  placeholder="Enter your e-mail"
                />{" "}
                <span className="error">{formError.emailError}</span>
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  type="text"
                  placeholder="Enter your password"
                />{" "}
                <span className="error">{formError.passwordError}</span>
              </label>
            </div>
            <div className="last">
              <div className="gender">
                <label>Gender : </label>
                <label>
                  Male
                  <input
                    onChange={(e) => {
                      setFormData({ ...formData, gender: e.target.value });
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
                      setFormData({ ...formData, gender: e.target.value });
                    }}
                    type="radio"
                    name="gender"
                    value={"female"}
                  />
                </label>
                <span className="error">{formError.genderError}</span>
              </div>
              <div>
                <label>Country: </label>
                <select
                  onChange={(e) => {
                    setFormData({ ...formData, country: e.target.value });
                  }}
                  name="country"
                >
                  <option value="">Select...</option>
                  <option value="nep">Nepal</option>
                  <option value="usa">USA</option>
                  <option value="aus">Australia</option>
                </select>
              </div>
              <span className="error">{formError.countryError}</span>
              <div>
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, check: e.target.checked });
                  }}
                  type="checkbox"
                />{" "}
              </div>
              <span className="error">{formError.checkError}</span>
              <div>
                <button
                  className="btn-1"
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="image1"></div>
      </div>
    </>
  );
}

export default Contact;
