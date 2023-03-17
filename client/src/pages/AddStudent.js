import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [subject, setSubject] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      subject: subject,
      nationalID: nationalID,
      mobileNumber: mobileNumber,
      email: email,
    };

    if (
      firstName === "" ||
      lastName === "" ||
      dateOfBirth === "" ||
      subject === "" ||
      subject === "Select Subject" ||
      nationalID === "" ||
      mobileNumber === "" ||
      email === ""
    ) {
      alert("Please fill out all required fields...!");
    } else {
      if (mobileNumber.length !== 10) {
        alert("Please check you mobile number...!");
      } else if (nationalID.length !== 10 && nationalID.length !== 12) {
        alert("Please check you National ID...!");
      } else {
        axios
          .post("http://localhost:4001/v1/api/student", formData)
          .then((res) => {
            console.log(res.data);
            history.replace("/");
          })
          .catch((err) => {
            console.lof(err);
          });
      }
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="First Name"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Last Name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="date"
          name="Date of Birth"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Select Subject"
          onChange={(e) => setSubject(e.target.value)}
        >
          <option selected>Select Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Religion">Religion</option>
          <option value="ICT">ICT</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="National ID"
          placeholder="National ID"
          onChange={(e) => setNationalID(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Mobile Number"
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="Email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
