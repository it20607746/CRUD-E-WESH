import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditStudent = ({ match }) => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [subject, setSubject] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4001/v1/api/student/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = {
        firstName: firstName ? firstName : data.firstName,
        lastName: lastName ? lastName : data.lastName,
        dateOfBirth: dateOfBirth ? dateOfBirth : data.dateOfBirth,
        subject: subject ? subject : data.subject,
        nationalID: nationalID ? nationalID : data.nationalID,
        mobileNumber: mobileNumber ? mobileNumber : data.mobileNumber,
        email: email ? email : data.email,
      };
      console.log("data : ", formData)

      axios
      .put(`http://localhost:4001/v1/api/student/${match.params.id}`, formData)
      .then((res) => {
        console.log(res.data);
        history.replace("/");
      })
      .catch((err) => {
        console.lof(err);
      });
    } catch (error) {
      console.log(error);
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
          defaultValue={data.firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Last Name"
          placeholder="Last Name"
          defaultValue={data.lastName}
          onChange={(e) => setLastName(e.target.value )}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="date"
          name="Date of Birth"
          defaultValue={data.dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Select Subject"
          value={data.subject}
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
          defaultValue={data.nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="Mobile Number"
          placeholder="Mobile Number"
          defaultValue={data.mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="Email"
          placeholder="Email"
          defaultValue={data.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditStudent;
