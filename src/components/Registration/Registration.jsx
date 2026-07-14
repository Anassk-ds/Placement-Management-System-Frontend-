import { useState, useEffect } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";


function Register() {

  const navigate = useNavigate();


  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCGPA] = useState("");

  const [students, setStudents] = useState([]);



  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



  // Load students from localStorage

  useEffect(() => {

    const storedStudents = localStorage.getItem("students");

    if (storedStudents) {

      setStudents(JSON.parse(storedStudents));

    }

  }, []);





  function registerStudent(e) {

    e.preventDefault();



    // Validation

    if (studentName.trim() === "") {

      alert("Name is required");
      return;

    }



    if (!emailPattern.test(email)) {

      alert("Enter valid email");
      return;

    }



    if (phone.length !== 10 || isNaN(phone)) {

      alert("Enter valid 10 digit phone number");
      return;

    }



    if (branch.trim() === "") {

      alert("Enter branch");
      return;

    }



    if (cgpa === "" || Number(cgpa) <= 0 || Number(cgpa) > 10) {

      alert("CGPA must be between 0 and 10");
      return;

    }




    if (!passwordPattern.test(password)) {

      alert(
        "Password must contain minimum 8 characters with uppercase, lowercase, number and special character"
      );

      return;

    }




    // Student object

    const student = {

      id: Date.now(),

      studentName,

      email,

      phone,

      branch,

      cgpa

    };





    // Add student

    const updatedStudents = [
      ...students,
      student
    ];



    setStudents(updatedStudents);




    // Save data

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );




    alert("Student Registered Successfully!");





    // Clear form

    setStudentName("");
    setPassword("");
    setEmail("");
    setPhone("");
    setBranch("");
    setCGPA("");




    // Go to students page

    navigate("/students");

  }







  return (

    <div className="register-container">


      <h1>
        Student Registration
      </h1>



      <input
        type="text"
        placeholder="Enter Name"
        value={studentName}
        onChange={(e)=>setStudentName(e.target.value)}
      />



      <br />



      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />



      <br />



      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />



      <br />



      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />



      <br />



      <input
        type="text"
        placeholder="Enter Branch"
        value={branch}
        onChange={(e)=>setBranch(e.target.value)}
      />



      <br />



      <input
        type="number"
        placeholder="Enter CGPA"
        value={cgpa}
        onChange={(e)=>setCGPA(e.target.value)}
      />



      <br /><br />



      <button onClick={registerStudent}>
        Register
      </button>



      <br /><br />



      <h4>
        Already Have An Account?
      </h4>



      <button onClick={()=>navigate("/login")}>
        Login
      </button>



    </div>

  );

}


export default Register;