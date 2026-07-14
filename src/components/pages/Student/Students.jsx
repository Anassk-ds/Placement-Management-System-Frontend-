import { useEffect, useState } from "react";
import Student from "../../StudentTable/Student";
import { Link } from "react-router-dom";

function Students() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    // Get students from localStorage
    const storedStudents = localStorage.getItem("students");

    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }


    // Loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);


    return () => clearTimeout(timer);

  }, []);



  return (
    <>

      <h1>Student Management</h1>

      <p>
        Manage all registered students here
      </p>


      <Link to="/register">
        <button>
          Add New Student
        </button>
      </Link>



      {loading ? (

        <h3>
          Loading...
        </h3>

      ) : (

        students.length > 0 ? (

          <Student students={students} />

        ) : (

          <h3>
            No Students Registered
          </h3>

        )

      )}


    </>
  );
}


export default Students;