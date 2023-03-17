import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";

const Home = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    getApiDate();
  }, []);

  const getApiDate = () => {
    axios
      .get(`http://localhost:4001/v1/api/student`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const handleDelete = (id) => {
    console.log("id : ", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log("Done");
        axios
          .delete(`http://localhost:4001/v1/api/student/${id}`)
          .then((res) => {
            console.log(res.data);
            getApiDate();
          })
          .catch((error) => {
            console.log(error.data);
          });
      } else {
        console.log("Closed");
      }
    });
  };
  return (
    <div className="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Subject</th>
            <th scope="col">National ID</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {student ? (
            student.map((item) => (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.subject}</td>
                <td>{item.nationalID}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.email}</td>
                <td>
                  <Link
                    to={`/edit/${item._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h1>Loading...!</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
