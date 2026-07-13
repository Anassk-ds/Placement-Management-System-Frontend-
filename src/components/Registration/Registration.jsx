import { useState } from "react";
import "./Registration.css";
import Student from "../StudentTable/Student";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCGPA] = useState("");
  const navigate = useNavigate();

  // Array to store students
  const [students, setStudents] = useState([]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function registerStudent(e) {
    e.preventDefault();

    if (studentName.trim() === "") {
      alert("Name is required");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    if (branch.trim() === "") {
      alert("Enter your branch.");
      return;
    }

    if (cgpa === "") {
      alert("Please enter your CGPA.");
      return;
    }

    if (Number(cgpa) <= 0 || Number(cgpa) > 10) {
      alert("CGPA must be between 0.1 and 10.");
      return;
    }

    if (!passwordPattern.test(password)) {
      alert(
        "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    const student = {
      studentName,
      email,
      phone,
      branch,
      cgpa,
    };

    // Add student to array
    setStudents([...students, student]);

    alert("Registration Successful!");

    // Clear form
    setStudentName("");
    setPassword("");
    setEmail("");
    setPhone("");
    setBranch("");
    setCGPA("");
  }

  return (
    <div className="register-container">
      <h1>Student Registration</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Enter Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Enter CGPA"
        value={cgpa}
        onChange={(e) => setCGPA(e.target.value)}
      />
      <br />

      <button onClick={registerStudent}>Register</button>

      {/* Student Table Component */}
      <Student students={students} /><br />

   
      <h4>Already Have An Account?</h4>

<button onClick={() => navigate("/Login")}>
  Login
</button>


    </div>
  );
}

export default Register;